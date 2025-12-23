import { toast } from 'sonner'
import type { AxiosError } from 'axios'
import * as logs from '@/config/constants/messageLogs'

/**
 * Error types for better error handling
 */
export enum ErrorType {
    API = 'api_error',
    VALIDATION = 'validation_error',
    AUTHENTICATION = 'auth_error',
    NETWORK = 'network_error',
    UNKNOWN = 'unknown_error'
}

/**
 * Structured error interface
 */
export interface AppError {
    type: ErrorType
    message: string
    code?: number
    details?: Record<string, unknown>
    originalError?: unknown
}

/**
 * Create a structured error object
 */
export function createError(
    type: ErrorType,
    message: string,
    details?: Record<string, unknown>,
    originalError?: unknown,
    code?: number
): AppError {
    return {
        type,
        message,
        code,
        details,
        originalError
    }
}

/**
 * Display error message to the user
 */
export function showError(error: AppError | string, logToConsole = true): void {
    const message = typeof error === 'string' ? error : error.message

    // Show toast notification
    toast.error(message, {
        duration: 5000,
        id:
            typeof error === 'string'
                ? undefined
                : `${error.type}-${error.code}`
    })

    // Log to console in development
    if (logToConsole && import.meta.env.DEV) {
        if (typeof error === 'string') {
            console.error(error)
        } else {
            console.error(`[${error.type}] ${error.message}`, error)
        }
    }
}

/**
 * Handle API errors from Axios
 */
export function handleApiError(error: AxiosError): AppError {
    const response = error?.response

    if (!response) {
        return createError(
            ErrorType.NETWORK,
            logs.MSG_XXX_ERROR_RETRY,
            undefined,
            error
        )
    }

    const status = response.status

    switch (status) {
        case 400:
            if (response.data && typeof response.data === 'object') {
                const { errors } = response.data as {
                    errors?: Record<string, string[]>
                }
                if (errors) {
                    const firstErrorKey = Object.keys(errors)[0]
                    const errorMessage =
                        firstErrorKey && errors[firstErrorKey]?.[0]
                            ? errors[firstErrorKey][0]
                            : logs.MSG_400_BAD_REQUEST

                    return createError(
                        ErrorType.VALIDATION,
                        errorMessage,
                        { fields: errors },
                        error,
                        status
                    )
                }
            }
            return createError(
                ErrorType.VALIDATION,
                logs.MSG_400_BAD_REQUEST,
                undefined,
                error,
                status
            )

        case 401:
            return createError(
                ErrorType.AUTHENTICATION,
                logs.MSG_401_UNAUTHORIZED,
                undefined,
                error,
                status
            )

        case 403:
            return createError(
                ErrorType.AUTHENTICATION,
                logs.MSG_403_FORBIDDEN,
                undefined,
                error,
                status
            )

        case 404:
            return createError(
                ErrorType.API,
                logs.MSG_404_NOT_FOUND,
                undefined,
                error,
                status
            )

        case 500:
            return createError(
                ErrorType.API,
                logs.MSG_500_SERVER_ERROR,
                undefined,
                error,
                status
            )

        default:
            return createError(
                ErrorType.UNKNOWN,
                logs.MSG_XXX_ERROR_RETRY,
                undefined,
                error,
                status
            )
    }
}

/**
 * Safe promise handler to avoid try/catch blocks
 */
export async function safePromise<T>(
    promise: Promise<T>
): Promise<[T | null, AppError | null]> {
    try {
        const data = await promise
        return [data, null]
    } catch (error) {
        if ((error as AxiosError).isAxiosError) {
            const appError = handleApiError(error as AxiosError)
            return [null, appError]
        }

        return [
            null,
            createError(
                ErrorType.UNKNOWN,
                error instanceof Error ? error.message : String(error),
                undefined,
                error
            )
        ]
    }
}
