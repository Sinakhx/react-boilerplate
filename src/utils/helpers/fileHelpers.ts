export const urlToFile = async (
    url: string,
    filename: string,
    mimeType: string
): Promise<Blob> => {
    const res = await fetch(url)
    const buf = await res.arrayBuffer()
    return new File([buf], filename, { type: mimeType })
}
