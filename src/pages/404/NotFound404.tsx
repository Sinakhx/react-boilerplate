import { Link, useNavigate } from 'react-router-dom'
import slugs from '@/routes/slugs'
import './NotFound404.scss'

export default function NotFound404() {
    const navigate = useNavigate()

    return (
        <div id='notfound-404-page'>
            <div className='notfound-container'>
                <div className='notfound-404'></div>
                <h1>404</h1>
                <h2>Oops! Page Not Be Found</h2>
                <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed. name changed or is temporarily unavailable
                </p>
                <Link
                    className='notfound-404-link-to-home'
                    to={slugs.home}
                    onClick={() => navigate(slugs.home)}
                >
                    Back to homepage
                </Link>
            </div>
        </div>
    )
}
