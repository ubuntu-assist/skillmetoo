'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BookOpen, Video, Headphones, FileText } from 'lucide-react'
import { resources, getAllTags, formatResourceType } from '@/lib/data/resources'

// Components
import ResourcesFilter from '@/components/resources/resources-filter'
import ResourcesSidebar from '@/components/resources/resources-sidebar'
import ResourcesGrid from '@/components/resources/resources-grid'
import ResourceModal from '@/components/resources/resource-modal'
import { useResourceFiltering } from '@/hooks/use-resource-filtering'
import { usePagination } from '@/hooks/use-pagination'

export default function ResourcesPage() {
  // Get all unique tags
  const allTags = getAllTags()

  // Resource filtering
  const {
    searchTerm,
    setSearchTerm,
    activeTab,
    setActiveTab,
    selectedTags,
    showPremiumOnly,
    setShowPremiumOnly,
    filteredResources,
    hasActiveFilters,
    toggleTag,
    resetFilters,
  } = useResourceFiltering(resources)

  // Pagination
  const resourcesPerPage = 6
  const {
    currentPage,
    currentItems: paginatedResources,
    totalPages,
    goToPage,
    resetPage,
  } = usePagination(filteredResources, resourcesPerPage)

  // Resource modal
  const [selectedResource, setSelectedResource] = useState<any>(null)
  const [showResourceModal, setShowResourceModal] = useState(false)

  // Function to open the resource modal
  const openResourceModal = (resource: any) => {
    setSelectedResource(resource)
    setShowResourceModal(true)
  }

  // Function to handle filter changes and reset pagination
  const handleFilterChange = (fn: Function, ...args: any[]) => {
    fn(...args)
    resetPage()
  }

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case 'ebook':
        return BookOpen
      case 'video':
        return Video
      case 'podcast':
        return Headphones
      case 'document':
        return FileText
      default:
        return FileText
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className='relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10'>
          <div className='animate-fade-in max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-sm'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              Centre de ressources
            </h1>
            <p className='text-lg md:text-xl text-blue-100'>
              Explorez notre bibliothèque de ressources pour développer vos
              compétences et accélérer votre carrière.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className='py-12 bg-gray-50 dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <ResourcesFilter
            searchTerm={searchTerm}
            showPremiumOnly={showPremiumOnly}
            onSearchChange={(value) => handleFilterChange(setSearchTerm, value)}
            onPremiumFilterChange={(value) =>
              handleFilterChange(setShowPremiumOnly, value)
            }
            onResetFilters={() => {
              resetFilters()
              resetPage()
            }}
            hasActiveFilters={hasActiveFilters}
          />
        </div>
      </section>

      {/* Main Content */}
      <section className='py-12 bg-gray-50 dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Sidebar */}
            <ResourcesSidebar
              activeTab={activeTab}
              onTabChange={(value) => handleFilterChange(setActiveTab, value)}
              selectedTags={selectedTags}
              allTags={allTags}
              onTagToggle={(tag) => {
                toggleTag(tag)
                resetPage()
              }}
            />

            {/* Resources Grid */}
            <ResourcesGrid
              resources={paginatedResources}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
              onViewResource={openResourceModal}
              getResourceTypeIcon={getResourceTypeIcon}
              formatResourceType={formatResourceType}
              activeTab={activeTab}
              selectedTags={selectedTags}
              showPremiumOnly={showPremiumOnly}
              onResetFilters={() => {
                resetFilters()
                resetPage()
              }}
            />
          </div>
        </div>
      </section>

      {/* Resource Modal */}
      <ResourceModal
        resource={selectedResource}
        isOpen={showResourceModal}
        onClose={() => setShowResourceModal(false)}
        getResourceTypeIcon={getResourceTypeIcon}
        formatResourceType={formatResourceType}
      />

      {/* CTA Section */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
          <div className='max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-xl text-white'>
            <div className='text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Vous souhaitez contribuer ?
              </h2>
              <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                Vous êtes un expert dans votre domaine et souhaitez partager vos
                connaissances ? Proposez une ressource pour notre centre et
                aidez d'autres jeunes africains à développer leurs compétences.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Button className='bg-white text-blue-700 hover:bg-blue-50 h-12 px-8 text-base'>
                  Proposer une ressource
                </Button>
                <Button
                  variant='outline'
                  className='border-white text-black hover:bg-white/10 h-12 px-8 text-base'
                >
                  Contacter l'équipe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
