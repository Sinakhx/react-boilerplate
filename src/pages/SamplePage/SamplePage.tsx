import logo from '/favicon.svg'
import { Button } from './components'
import './SamplePage.scss'

export default function SamplePage() {
    return (
        <div className='sample-page'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>Hello Vite + React + Scss!</p>
            <p>
                <Button />
            </p>
            <p>
                Edit <code>App.tsx</code> and save to test HMR updates.
            </p>
            <p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
                {' | '}
                <a
                    className='App-link'
                    href='https://vitejs.dev/guide/features.html'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Vite Docs
                </a>
            </p>
        </div>
    )
}
