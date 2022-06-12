import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false
        }
    }
})
