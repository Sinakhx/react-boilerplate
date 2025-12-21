/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')],
    darkMode: 'class'
}
