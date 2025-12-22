import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Routes } from 'react-router-dom'
import ErrorFallback from './ErrorFallback'
import LoadingFallback from './LoadingFallback'

const HomePage = lazy(() => import('../pages/SamplePage/SamplePage'))
const NotFoundPage = lazy(() => import('../pages/404/NotFound404'))

export default function Router() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    )
}
