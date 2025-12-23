import '@/assets/styles/app.scss'
import { Sidebar } from '@/components'
import { queryClient } from '@/config/api/reactQueryConfig'
import Router from '@/routes/router'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Sidebar />
                <Router />
                <Toaster position='top-right' richColors />
            </BrowserRouter>
            {import.meta.env.DEV && <ReactQueryDevtools />}
        </QueryClientProvider>
    )
}

export default App
