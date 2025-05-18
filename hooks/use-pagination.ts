import { useState } from 'react'

export function usePagination<T>(
  items: T[],
  itemsPerPage: number,
  initialPage: number = 1
) {
  const [currentPage, setCurrentPage] = useState(initialPage)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const resetPage = () => {
    setCurrentPage(1)
  }

  return {
    currentPage,
    currentItems,
    totalPages,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    resetPage,
  }
}
