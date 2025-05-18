import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

interface ResourcesFilterProps {
  searchTerm: string
  showPremiumOnly: boolean
  onSearchChange: (value: string) => void
  onPremiumFilterChange: (value: boolean) => void
  onResetFilters: () => void
  hasActiveFilters: boolean
}

const ResourcesFilter = ({
  searchTerm,
  showPremiumOnly,
  onSearchChange,
  onPremiumFilterChange,
  onResetFilters,
  hasActiveFilters,
}: ResourcesFilterProps) => {
  return (
    <section className='py-8 bg-white dark:bg-gray-900 sticky top-20 z-20 border-b border-gray-200 dark:border-gray-800'>
      <div className='container'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Search input */}
          <div className='relative w-full md:w-auto md:min-w-[300px]'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
            <Input
              type='text'
              placeholder='Rechercher des ressources...'
              className='pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-full'
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* Premium filter */}
          <div className='flex items-center'>
            <label className='flex items-center cursor-pointer'>
              <div className='relative'>
                <input
                  type='checkbox'
                  className='sr-only'
                  checked={showPremiumOnly}
                  onChange={() => onPremiumFilterChange(!showPremiumOnly)}
                />
                <div
                  className={`block w-10 h-6 rounded-full ${
                    showPremiumOnly
                      ? 'bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                    showPremiumOnly ? 'transform translate-x-4' : ''
                  }`}
                ></div>
              </div>
              <div className='ml-3 text-sm font-medium text-gray-700 dark:text-gray-300'>
                Ressources premium uniquement
              </div>
            </label>
          </div>

          {/* Reset filters button */}
          {hasActiveFilters && (
            <Button
              variant='outline'
              size='sm'
              onClick={onResetFilters}
              className='text-sm'
            >
              Réinitialiser les filtres
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default ResourcesFilter
