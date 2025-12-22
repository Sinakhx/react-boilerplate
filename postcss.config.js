export default {
    plugins: {
        'postcss-import': {},
        '@tailwindcss/postcss': {},
        'postcss-preset-env': {
            stage: 3,
            browsers: [
                'last 2 versions',
                'not dead',
                'Chrome >= 95',
                'Firefox >= 90',
                'Safari >= 15',
                'Edge >= 95'
            ],
            autoprefixer: {
                flexbox: 'no-2009',
                grid: 'autoplace'
            }
        },
        ...(process.env.NODE_ENV === 'production'
            ? { cssnano: { preset: 'default' } }
            : {})
    }
}
