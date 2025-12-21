import type { ReactElement, JSXElementConstructor } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

// Simple custom render function
function customRender<T>(
    ui: ReactElement<T, string | JSXElementConstructor<T>>,
    options: RenderOptions = {}
) {
    return render(ui, {
        // Add providers here when needed
        wrapper: ({ children }) => children,
        ...options
    })
}

// Re-export everything from testing-library
export * from '@testing-library/react'

// Override render method
export { customRender as render }

/**
 * Helper function to create test data
 * @param overrides - Properties to override in the default test data
 * @returns Test data with applied overrides
 */
export function createTestData<T extends Record<string, unknown>>(
    defaults: T,
    overrides?: Partial<T>
): T {
    return {
        ...defaults,
        ...overrides
    }
}
