import { Button } from './components'
import './SamplePage.scss'
import logo from '/favicon.svg'

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
                    href='https://react.dev'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
                {' | '}
                <a
                    className='App-link'
                    href='https://vite.dev/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Vite Docs
                </a>
            </p>
        </div>
    )
}
