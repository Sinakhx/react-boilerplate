// typescript declarations for `.env` variables
interface ImportMetaEnv {
    VITE_API_BASE_URL: string
    VITE_API_USERNAME: string
    VITE_API_PASSWORD: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
