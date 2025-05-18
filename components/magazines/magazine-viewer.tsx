'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize,
  ZoomIn,
  ZoomOut,
  RotateCw,
} from 'lucide-react'

interface MagazineViewerProps {
  magazine: {
    id: number
    title: string
    coverImage: string
    pages: number
  }
}

const MagazineViewer = ({ magazine }: MagazineViewerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)

  const totalPages = magazine.pages || 1

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const zoomIn = () => {
    setZoom(Math.min(zoom + 0.25, 2.5))
  }

  const zoomOut = () => {
    setZoom(Math.max(zoom - 0.25, 0.5))
  }

  const rotate = () => {
    setRotation((rotation + 90) % 360)
  }

  // For a real implementation, you would load the actual magazine pages here
  // This is just a placeholder using the cover image for demonstration
  const getPageImage = (pageNumber: number) => {
    // In a real app, you would return different images based on the page number
    return magazine.coverImage
  }

  return (
    <div>
      {/* Preview card */}
      <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
            Aperçu du magazine
          </h3>
          <Button
            onClick={() => setIsOpen(true)}
            variant='outline'
            className='flex items-center text-blue-600 dark:text-blue-400'
          >
            <Maximize className='h-4 w-4 mr-2' />
            Plein écran
          </Button>
        </div>

        <div
          className='relative aspect-[3/4] w-full max-w-md mx-auto shadow-lg mb-4 cursor-pointer'
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={getPageImage(currentPage)}
            alt={`${magazine.title} - Page ${currentPage}`}
            fill
            className='object-cover rounded-md'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition-opacity'>
            <div className='bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3'>
              <Maximize className='h-6 w-6 text-blue-600 dark:text-blue-400' />
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            variant='outline'
            size='icon'
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>

          <div className='text-center'>
            <span className='text-gray-700 dark:text-gray-300'>
              Page {currentPage} sur {totalPages}
            </span>
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            variant='outline'
            size='icon'
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>

      {/* Full-screen viewer modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='max-w-7xl w-[95vw] h-[95vh] p-0 max-h-screen bg-gray-100 dark:bg-gray-900'>
          <div className='flex flex-col h-full'>
            {/* Toolbar */}
            <div className='bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between'>
              <div className='flex items-center'>
                <h2 className='text-lg font-bold text-gray-900 dark:text-white mr-4'>
                  {magazine.title}
                </h2>
                <span className='text-gray-500 dark:text-gray-400'>
                  Page {currentPage} / {totalPages}
                </span>
              </div>

              <div className='flex items-center gap-2'>
                <Button variant='outline' size='icon' onClick={zoomOut}>
                  <ZoomOut className='h-4 w-4' />
                </Button>
                <Button variant='outline' size='icon' onClick={zoomIn}>
                  <ZoomIn className='h-4 w-4' />
                </Button>
                <Button variant='outline' size='icon' onClick={rotate}>
                  <RotateCw className='h-4 w-4' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setIsOpen(false)}
                >
                  <X className='h-5 w-5' />
                </Button>
              </div>
            </div>

            {/* Viewer */}
            <div className='flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 overflow-hidden'>
              <div className='relative h-full max-h-full max-w-full overflow-auto flex items-center justify-center'>
                <div
                  style={{
                    transform: `scale(${zoom}) rotate(${rotation}deg)`,
                    transition: 'transform 0.2s ease-in-out',
                  }}
                >
                  <Image
                    src={getPageImage(currentPage)}
                    alt={`${magazine.title} - Page ${currentPage}`}
                    width={800}
                    height={1130}
                    className='object-contain shadow-lg'
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className='bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between'>
              <Button
                onClick={prevPage}
                disabled={currentPage === 1}
                variant='outline'
              >
                <ChevronLeft className='h-4 w-4 mr-2' />
                Page précédente
              </Button>

              <div className='flex items-center gap-2'>
                <input
                  type='number'
                  min={1}
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => {
                    const value = parseInt(e.target.value)
                    if (value >= 1 && value <= totalPages) {
                      setCurrentPage(value)
                    }
                  }}
                  className='w-16 h-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 text-center'
                />
                <span className='text-gray-500 dark:text-gray-400'>
                  / {totalPages}
                </span>
              </div>

              <Button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                variant='outline'
              >
                Page suivante
                <ChevronRight className='h-4 w-4 ml-2' />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default MagazineViewer
