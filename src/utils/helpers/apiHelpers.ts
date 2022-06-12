/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * handles promises with async/await
 * @param promise
 * @return array of: [ resolved value, error ]
 */
export const ApiPromiseHandler = async (promise: Promise<unknown>) => {
    try {
        const data = await promise
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

/**
 * downloads files (like excel) from api requests' responses
 * @param res promise response
 * @param config configuration object
 * @param config.filename desired name for the downloading file
 */
export const downloadFile = (
    res: Record<string, any>,
    config?: Record<string, unknown>
) => {
    const headerContentDisp = res.headers['content-disposition']
    const filename =
        headerContentDisp &&
        headerContentDisp.split('filename=')[1].replace(/["']/g, '')
    const contentType = res.headers['content-type']

    const blob = new Blob([res.data], { contentType } as BlobPropertyBag)
    const href = window.URL.createObjectURL(blob)

    const el = document.createElement('a')
    el.setAttribute('href', href)
    el.setAttribute('download', config?.filename || filename || 'file')
    el.click()

    window.URL.revokeObjectURL(blob as unknown as string)
    return res
}

export const mockAPIFactory = <T = unknown>(data: T, delay = 0) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const req = (url: string, ...options: unknown[]) => {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve(data)
            }, delay)
        ) as Promise<T>
    }
    return { get: req, post: req, put: req, patch: req, delete: req }
}
