const ErrorFallback = ({ error, resetErrorBoundary }: any) => (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
        <h1 className='text-2xl font-bold'>Oops, something went wrong</h1>
        <p className='text-gray-600'>{error.message}</p>
        <button
            onClick={resetErrorBoundary}
            className='px-4 py-2 bg-blue-500 text-white rounded'
        >
            Try again
        </button>
    </div>
)

export default ErrorFallback
