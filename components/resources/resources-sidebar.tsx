import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Video, Headphones, FileText } from 'lucide-react'

interface ResourcesSidebarProps {
  activeTab: string
  onTabChange: (value: string) => void
  selectedTags: string[]
  allTags: string[]
  onTagToggle: (tag: string) => void
}

const ResourcesSidebar = ({
  activeTab,
  onTabChange,
  selectedTags,
  allTags,
  onTagToggle,
}: ResourcesSidebarProps) => {
  return (
    <div className='lg:col-span-1 space-y-8'>
      {/* Resource Types */}
      <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
        <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          Types de ressources
        </h3>
        <Tabs
          defaultValue='all'
          orientation='vertical'
          value={activeTab}
          onValueChange={onTabChange}
        >
          <TabsList className='flex flex-col h-auto space-y-1 bg-transparent'>
            <TabsTrigger
              value='all'
              className='justify-start px-3 py-2 h-auto data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-blue-400'
            >
              Toutes les ressources
            </TabsTrigger>
            <TabsTrigger
              value='ebook'
              className='justify-start px-3 py-2 h-auto data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-blue-400'
            >
              <BookOpen className='h-4 w-4 mr-2' />
              E-books
            </TabsTrigger>
            <TabsTrigger
              value='video'
              className='justify-start px-3 py-2 h-auto data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-blue-400'
            >
              <Video className='h-4 w-4 mr-2' />
              Vidéos
            </TabsTrigger>
            <TabsTrigger
              value='podcast'
              className='justify-start px-3 py-2 h-auto data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-blue-400'
            >
              <Headphones className='h-4 w-4 mr-2' />
              Podcasts
            </TabsTrigger>
            <TabsTrigger
              value='document'
              className='justify-start px-3 py-2 h-auto data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-blue-400'
            >
              <FileText className='h-4 w-4 mr-2' />
              Documents
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Tags Filter */}
      <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md'>
        <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
          Tags populaires
        </h3>
        <div className='flex flex-wrap gap-2'>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Become Premium */}
      <div className='bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl p-6 shadow-md text-white'>
        <h3 className='text-xl font-bold mb-3'>Devenez Premium</h3>
        <p className='text-white/90 mb-4'>
          Accédez à toutes nos ressources exclusives et boostez votre
          apprentissage avec notre abonnement premium.
        </p>
        <Button className='w-full bg-white text-yellow-600 hover:bg-yellow-50'>
          Découvrir l'offre Premium
        </Button>
      </div>
    </div>
  )
}

export default ResourcesSidebar
