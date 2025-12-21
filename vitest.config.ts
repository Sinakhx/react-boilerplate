import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/config/tests/setupTests.ts'],
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'src/**/*.d.ts',
                '**/*.config.{js,ts}',
                '**/types/**'
            ]
        }
    },
    resolve: {
        alias: {
            '@': resolve(process.cwd(), 'src')
        }
    }
})
