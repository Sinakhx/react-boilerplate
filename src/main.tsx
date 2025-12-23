import type { ErrorInfo } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import '@/assets/styles/main.scss'
import App from './App'
import ErrorFallback from './routes/ErrorFallback'

const logError = (error: Error, info: ErrorInfo) => {
    // In production, you would send this to an error tracking service
    console.error('Application error:', error)
    console.error('Component stack:', info.componentStack)
}

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error(
        'Root element not found. Make sure there is a div with id "root" in your HTML.'
    )
}

const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
            <App />
        </ErrorBoundary>
    </StrictMode>
)
