import { useEffect, useRef } from 'react'

/**
 * gets the previous value of props or state
 * @param value the value to compare to the previous value
 * @returns the previous value of props or state
 */
export const usePrevious = <T>(value: T) => {
    const ref = useRef<T | undefined>()

    useEffect(() => {
        ref.current = value
    }, [value])
    return ref.current
}
