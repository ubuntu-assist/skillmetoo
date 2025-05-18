import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Lock, Download, ExternalLink } from 'lucide-react'

interface ResourceCardProps {
  resource: {
    id: number
    title: string
    description: string
    image: string
    type: string
    tags: string[]
    downloadable: boolean
    premium: boolean
    url: string
    date: string
    author: string
    fileSize?: string
    duration?: string
  }
  onViewResource: (resource: any) => void
  getResourceTypeIcon: (type: string) => any
  formatResourceType: (type: string) => string
}

const ResourceCard = ({
  resource,
  onViewResource,
  getResourceTypeIcon,
  formatResourceType,
}: ResourceCardProps) => {
  const Icon = getResourceTypeIcon(resource.type)

  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col'>
      <div className='relative'>
        <div className='relative aspect-[4/3] overflow-hidden'>
          <Image
            src={resource.image}
            alt={resource.title}
            fill
            className='object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>

        {/* Resource type and premium badge */}
        <div className='absolute top-3 left-3 flex space-x-2'>
          <span className='px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center'>
            <Icon className='h-3 w-3 mr-1' />
            {formatResourceType(resource.type)}
          </span>
        </div>

        {resource.premium && (
          <div className='absolute top-3 right-3'>
            <span className='px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center'>
              <Lock className='h-3 w-3 mr-1' />
              Premium
            </span>
          </div>
        )}
      </div>

      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-lg font-bold mb-3 text-gray-900 dark:text-white line-clamp-2'>
          {resource.title}
        </h3>

        <p className='text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow'>
          {resource.description}
        </p>

        <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4'>
          <span>{resource.author}</span>
          <span className='mx-2'>•</span>
          <span>{resource.date}</span>
        </div>

        <div className='flex flex-wrap gap-1 mb-4'>
          {resource.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className='inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md'
            >
              {tag}
            </span>
          ))}
          {resource.tags.length > 3 && (
            <span className='inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md'>
              +{resource.tags.length - 3}
            </span>
          )}
        </div>

        <div className='mt-auto'>
          <Button
            className='w-full bg-blue-600 hover:bg-blue-700'
            onClick={() => onViewResource(resource)}
          >
            {resource.premium ? (
              <>
                <Lock className='mr-2 h-4 w-4' />
                Contenu Premium
              </>
            ) : resource.downloadable ? (
              <>
                <Download className='mr-2 h-4 w-4' />
                Télécharger
              </>
            ) : (
              <>
                <ExternalLink className='mr-2 h-4 w-4' />
                Voir
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard
