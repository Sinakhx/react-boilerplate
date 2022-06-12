import { BrowserRouter } from 'react-router-dom'
import type { IProps } from '@/types'

export const MockRouter = ({ children }: IProps) => {
    return <BrowserRouter>{children}</BrowserRouter>
}
