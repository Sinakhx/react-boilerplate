import { useState } from 'react'

type Paginate = {
    list: unknown[]
    pageSize: number
    pageNumber: number
    setPageNumber: (pageNumber: number | ((prev: number) => number)) => void
}

export const paginate = ({
    list,
    pageSize,
    pageNumber,
    setPageNumber
}: Paginate) => {
    const pagesCount = Math.ceil(list?.length / pageSize) || 1
    const startIndex = (pageNumber - 1) * pageSize
    const pageList = list?.slice(startIndex, startIndex + pageSize)
    const goToPage = {
        first: () => {
            setPageNumber(1)
        },
        last: () => {
            setPageNumber(pagesCount)
        },
        exact: (number: number) => {
            setPageNumber(number)
        },
        prev: () => {
            if (pageNumber > 1) setPageNumber((prev: number) => prev - 1)
        },
        next: () => {
            if (pageNumber < pagesCount) setPageNumber((prev) => prev + 1)
        }
    }
    return [pageList, goToPage, pageNumber, pagesCount]
}

export const usePagination = ({
    list,
    pageSize
}: Pick<Paginate, 'list' | 'pageSize'>) => {
    const [pageNumber, setPageNumber] = useState(1)
    return paginate({ list, pageSize, pageNumber, setPageNumber })
}
