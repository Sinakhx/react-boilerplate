import { toast } from 'sonner'

// define log level
type LogLevel = 'console' | 'toast' | 'both'
const defaultLogLevel: LogLevel = 'console'

export const showError = (
    message: string,
    logLevel: LogLevel = defaultLogLevel
) => {
    if (logLevel === 'console' || logLevel === 'both') {
        console.error(message)
    }
    if (logLevel === 'toast' || logLevel === 'both') {
        toast.error(message)
    }
}
