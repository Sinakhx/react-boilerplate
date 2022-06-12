import './Loading.scss'

interface ILoadingProps {
    size?: string | number
    thickness?: string | number
    ringColor?: string
    spinnerColor?: string
    padding?: string | number
    style?: React.CSSProperties
}

export const Loading = ({
    size = 50,
    thickness = 3,
    ringColor = '#ffffff4d',
    spinnerColor = '#1ba99b',
    padding = 0,
    style = {}
}: ILoadingProps) => (
    <div className='loading-container'>
        <div
            id='loading'
            style={{
                width: size,
                height: size,
                borderWidth: thickness,
                borderColor: ringColor,
                borderTopColor: spinnerColor,
                padding,
                ...style
            }}
        ></div>
    </div>
)
