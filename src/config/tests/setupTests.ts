import '@testing-library/jest-dom'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Automatically cleanup after each test
afterEach(() => {
    cleanup()
})

// Mock global fetch if needed
// global.fetch = vi.fn();

// Add any global mocks or setup needed for all tests
