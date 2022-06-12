import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import Router from '@/routes/router'
import { Sidebar } from '@/components'
import { queryClient } from '@/config/api/reactQueryConfig'

import '@/assets/styles/app.scss'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Sidebar />
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
