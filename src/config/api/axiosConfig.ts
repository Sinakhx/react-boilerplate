import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { handleApiError, showError } from '@/utils/helpers/errorHandling'

// Get environment variables
const baseURL = import.meta.env.VITE_API_BASE_URL

// Basic auth credentials if needed
const basicAuth = {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD
}

// Common headers for all requests
const commonHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

/**
 * Create an axios instance with authentication
 */
const axiosWithAuth = axios.create({
    baseURL,
    headers: {
        ...commonHeaders
        // Add auth token if needed
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    auth: basicAuth,
    timeout: 30000 // 30 seconds timeout
})

/**
 * Create an axios instance without authentication
 */
const axiosWithoutAuth = axios.create({
    baseURL,
    headers: {
        ...commonHeaders
    },
    timeout: 30000 // 30 seconds timeout
})

/**
 * Add request interceptor to both instances
 * @param instance Axios instance
 */
const addRequestInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        (config) => {
            // You can modify the request config here
            // For example, add a token from localStorage
            // const token = localStorage.getItem('token');
            // if (token) {
            //   config.headers.Authorization = `Bearer ${token}`;
            // }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )
}

/**
 * Add response interceptor to both instances
 * @param instance Axios instance
 */
const addResponseInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: AxiosError) => {
            const appError = handleApiError(error)
            showError(appError)

            // Handle authentication errors
            if (error.response?.status === 401) {
                // Redirect to login or refresh token
                // window.location.href = '/login';
            }

            return Promise.reject(appError)
        }
    )
}

// Add interceptors to both instances
addRequestInterceptor(axiosWithAuth)
addRequestInterceptor(axiosWithoutAuth)
addResponseInterceptor(axiosWithAuth)
addResponseInterceptor(axiosWithoutAuth)

export { axiosWithAuth, axiosWithoutAuth }
