import { useCallback, useState } from 'react'
import './Button.scss'

interface ButtonProps {
    initialCount?: number
    step?: number
    className?: string
}

export const Button = ({
    initialCount = 0,
    step = 1,
    className = ''
}: ButtonProps) => {
    const [count, setCount] = useState<number>(initialCount)

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + step)
    }, [step])

    return (
        <button
            type='button'
            onClick={handleIncrement}
            className={`sample-page-btn btn btn-primary tw-flex tw-items-center tw-justify-center tw-gap-2 ${className}`.trim()}
            aria-label={`Increment counter by ${step}`}
        >
            <span className='tw-font-medium'>count is:</span>
            <span className='tw-font-bold'>{count}</span>
        </button>
    )
}

export default Button
