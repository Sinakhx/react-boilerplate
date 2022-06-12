import { render } from '@testing-library/react'
import type { JSXElementConstructor, ReactElement } from 'react'

const customRender = <T>(
    ui: ReactElement<T, string | JSXElementConstructor<T>>,
    options = {}
) =>
    render(ui, {
        // wrap provider(s) here if needed
        wrapper: ({ children }) => children,
        ...options
    })

// override render export
export { customRender as render }

export { default as userEvent } from '@testing-library/user-event'
export * from '@testing-library/react'
