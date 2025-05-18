import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Clock,
  FileText,
  Lock,
  Download,
  ExternalLink,
  Play,
  Headphones,
  X,
} from 'lucide-react'

interface ResourceModalProps {
  resource: any
  isOpen: boolean
  onClose: () => void
  getResourceTypeIcon: (type: string) => any
  formatResourceType: (type: string) => string
}

const ResourceModal = ({
  resource,
  isOpen,
  onClose,
  getResourceTypeIcon,
  formatResourceType,
}: ResourceModalProps) => {
  if (!resource) return null

  const Icon = getResourceTypeIcon(resource.type)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-4xl overflow-auto max-h-[90vh]'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>{resource.title}</DialogTitle>
          <DialogDescription>
            <div className='flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400'>
              <span className='flex items-center mr-4'>{resource.author}</span>
              <span className='mr-4'>{resource.date}</span>
              {resource.premium && (
                <span className='flex items-center text-yellow-500'>
                  <Lock className='h-4 w-4 mr-1' />
                  Premium
                </span>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Resource image */}
          <div className='relative aspect-[4/3] rounded-lg overflow-hidden'>
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              className='object-cover'
            />
            {resource.type === 'video' && (
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='h-16 w-16 rounded-full bg-blue-600/90 flex items-center justify-center'>
                  <Play className='h-8 w-8 text-white' />
                </div>
              </div>
            )}
            {resource.type === 'podcast' && (
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='h-16 w-16 rounded-full bg-blue-600/90 flex items-center justify-center'>
                  <Headphones className='h-8 w-8 text-white' />
                </div>
              </div>
            )}
          </div>

          {/* Resource details */}
          <div>
            {/* Changed from p to div to ensure it can safely contain other block elements */}
            <div className='text-gray-700 dark:text-gray-300 mb-4'>
              {resource.description}
            </div>

            <div className='space-y-4'>
              <div className='flex items-center'>
                <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3'>
                  <Icon className='h-5 w-5' />
                </div>
                <div>
                  <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Type
                  </h4>
                  <p className='text-gray-900 dark:text-white'>
                    {formatResourceType(resource.type)}
                  </p>
                </div>
              </div>

              {resource.duration && (
                <div className='flex items-center'>
                  <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3'>
                    <Clock className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                      Durée
                    </h4>
                    <p className='text-gray-900 dark:text-white'>
                      {resource.duration}
                    </p>
                  </div>
                </div>
              )}

              {resource.fileSize && (
                <div className='flex items-center'>
                  <div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3'>
                    <FileText className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                      Taille du fichier
                    </h4>
                    <p className='text-gray-900 dark:text-white'>
                      {resource.fileSize}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className='mt-6'>
              <h4 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Tags
              </h4>
              <div className='flex flex-wrap gap-2'>
                {resource.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className='px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className='mt-8'>
              {resource.premium ? (
                <Button className='w-full bg-yellow-500 hover:bg-yellow-600'>
                  Débloquer avec Premium
                </Button>
              ) : resource.downloadable ? (
                <Button className='w-full bg-blue-600 hover:bg-blue-700'>
                  <Download className='mr-2 h-4 w-4' />
                  Télécharger
                </Button>
              ) : (
                <Button className='w-full bg-blue-600 hover:bg-blue-700'>
                  <ExternalLink className='mr-2 h-4 w-4' />
                  Accéder à la ressource
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ResourceModal
