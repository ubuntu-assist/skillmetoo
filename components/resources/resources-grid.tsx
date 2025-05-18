import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import ResourceCard from './resource-card'

interface ResourcesGridProps {
  resources: any[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onViewResource: (resource: any) => void
  getResourceTypeIcon: (type: string) => any
  formatResourceType: (type: string) => string
  activeTab: string
  selectedTags: string[]
  showPremiumOnly: boolean
  onResetFilters: () => void
}

const ResourcesGrid = ({
  resources,
  currentPage,
  totalPages,
  onPageChange,
  onViewResource,
  getResourceTypeIcon,
  formatResourceType,
  activeTab,
  selectedTags,
  showPremiumOnly,
  onResetFilters,
}: ResourcesGridProps) => {
  return (
    <div className='lg:col-span-3'>
      {/* Filter results info */}
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
          {resources.length} ressource{resources.length !== 1 ? 's' : ''}
          {activeTab !== 'all' && ` de type ${formatResourceType(activeTab)}`}
          {selectedTags.length > 0 &&
            ` avec ${
              selectedTags.length > 1 ? 'les tags' : 'le tag'
            } ${selectedTags.join(', ')}`}
          {showPremiumOnly && ' premium'}
        </h2>
      </div>

      {/* Resources */}
      {resources.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onViewResource={onViewResource}
              getResourceTypeIcon={getResourceTypeIcon}
              formatResourceType={formatResourceType}
            />
          ))}
        </div>
      ) : (
        <div className='text-center py-12 bg-white dark:bg-gray-800 rounded-xl'>
          <div className='mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4'>
            <Search className='h-8 w-8 text-gray-400' />
          </div>
          <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
            Aucune ressource trouvée
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-6'>
            Essayez d'ajuster vos critères de recherche ou de réinitialiser les
            filtres.
          </p>
          <Button variant='outline' onClick={onResetFilters}>
            Réinitialiser les filtres
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && resources.length > 0 && (
        <div className='flex justify-center mt-12'>
          <div className='flex items-center space-x-2'>
            <Button
              variant='outline'
              size='icon'
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                className={currentPage === page ? 'bg-blue-600 text-white' : ''}
                onClick={() => onPageChange(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant='outline'
              size='icon'
              onClick={() =>
                onPageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResourcesGrid
