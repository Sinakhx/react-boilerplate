import { Loading } from '@/components/common/Loading/Loading'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
import dir from './slugs'

const Home = lazy(() => import('../pages/SamplePage/SamplePage'))
const NotFound404 = lazy(() => import('../pages/404/NotFound404'))

function Router() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path={dir.home} element={<Home />} />
                <Route path={dir.lastPage} element={<NotFound404 />} />
                <Route path='*' element={<NotFound404 />} />
            </Routes>
            {/* <ToastContainer /> */}
        </Suspense>
    )
}

export default Router
