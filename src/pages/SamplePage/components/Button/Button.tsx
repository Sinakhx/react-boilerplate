import { useState } from 'react'
import './Button.scss'

export const Button = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <button
            type='button'
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className='sample-page-btn'
        >
            count is: {count}
        </button>
    )
}
