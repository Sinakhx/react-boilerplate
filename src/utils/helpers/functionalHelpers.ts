export const convertToFormData = (
    fieldsList: Record<string, string | Blob>
): FormData => {
    const formData = new FormData()
    for (const key in fieldsList) {
        formData.append(key, fieldsList[key])
    }
    return formData
}

export const removeNonNumeric = (num: string): string =>
    num.toString().replace(/[^0-9]/g, '')
