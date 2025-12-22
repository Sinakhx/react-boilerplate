import { memo } from 'react'
import './Loading.scss'

interface LoadingProps {
    size?: string | number
    thickness?: string | number
    ringColor?: string
    spinnerColor?: string
    padding?: string | number
    style?: React.CSSProperties
    label?: string
}

export const Loading = memo(
    ({
        size = 50,
        thickness = 3,
        ringColor = '#ffffff4d',
        spinnerColor = '#1ba99b',
        padding = 0,
        style = {},
        label = 'Loading content'
    }: LoadingProps) => (
        <div
            className='loading-container tw-flex tw-items-center tw-justify-center tw-p-4'
            role='status'
            aria-live='polite'
            aria-busy='true'
        >
            <div
                id='loading'
                className='tw-animate-spin tw-rounded-full tw-border-solid'
                style={{
                    width: size,
                    height: size,
                    borderWidth: thickness,
                    borderColor: ringColor,
                    borderTopColor: spinnerColor,
                    padding,
                    ...style
                }}
            />
            <span className='tw-sr-only'>{label}</span>
        </div>
    )
)

// Add display name for debugging
Loading.displayName = 'Loading'

export default Loading
