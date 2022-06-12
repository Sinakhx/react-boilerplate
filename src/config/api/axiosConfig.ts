import axios from 'axios'
import { showError } from '@/utils/helpers'
import * as logs from '@/config/constants/messageLogs'
// import Cookies from 'js-cookie'

const baseURL = import.meta.env.VITE_API_BASE_URL

const basicAuth = {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD
}

const commonHeaders = {
    'Content-Type': 'application/json' // or  'multipart/form-data' , ...
}

const axiosWithAuth = axios.create({
    baseURL,
    headers: {
        ...commonHeaders
        // Authorization: `Bearer ${Cookies.get('token')}`
    },
    auth: basicAuth
})

const axiosWithoutAuth = axios.create({
    baseURL,
    headers: {
        ...commonHeaders
    }
})

const axiosSuccessHandler = (response: unknown) => response

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const axiosErrorHandler = (error: any) => {
    const response = error?.response || {}
    if (typeof response.data === 'string') {
        showError(response.data)
    } else if (response.status === 400) {
        if (response.data) {
            const { errors } = response.data
            const firstErrro = Object.keys(errors)[0]
            showError(errors[firstErrro][0])
        } else {
            showError(logs.MSG_400_BAD_REQUEST)
        }
    } else if (response.status === 401) {
        showError(logs.MSG_401_UNAUTHORIZED)
    } else if (response.status === 403) {
        showError(logs.MSG_403_FORBIDDEN)
    } else if (response.status === 404) {
        showError(logs.MSG_404_NOT_FOUND)
    } else if (response.status === 500) {
        showError(logs.MSG_500_SERVER_ERROR)
    } else {
        showError(logs.MSG_XXX_ERROR_RETRY)
    }
    return Promise.reject(error)
}

axiosWithAuth.interceptors.response.use(axiosSuccessHandler, axiosErrorHandler)
axiosWithoutAuth.interceptors.response.use(
    axiosSuccessHandler,
    axiosErrorHandler
)

export { axiosWithAuth, axiosWithoutAuth }
