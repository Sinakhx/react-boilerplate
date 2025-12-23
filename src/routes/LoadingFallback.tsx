import { Loading } from '@/components'

const LoadingFallback = () => (
    <div className='flex items-center justify-center min-h-screen'>
        <Loading size={60} label='Loading page content' />
    </div>
)

export default LoadingFallback
