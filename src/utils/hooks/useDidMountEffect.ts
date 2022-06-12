import { useEffect, useRef } from 'react'

export const useDidMountEffect = (func: () => void, deps: unknown[]): void => {
    const didMount = useRef(false)

    useEffect(() => {
        if (didMount.current) func()
        else didMount.current = true
    }, deps)
}
