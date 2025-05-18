import { useState } from 'react'

export function useResourceFiltering(resources: any[]) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)

  // Filter resources based on search, type, tags, and premium filter
  const filteredResources = resources.filter((resource) => {
    // Search filter
    const matchesSearch =
      searchTerm === '' ||
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag: string) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )

    // Type filter
    const matchesType = activeTab === 'all' || resource.type === activeTab

    // Tags filter
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => resource.tags.includes(tag))

    // Premium filter
    const matchesPremium = !showPremiumOnly || resource.premium

    return matchesSearch && matchesType && matchesTags && matchesPremium
  })

  // Check if any filter is active
  const hasActiveFilters =
    searchTerm !== '' ||
    activeTab !== 'all' ||
    selectedTags.length > 0 ||
    showPremiumOnly

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('')
    setActiveTab('all')
    setSelectedTags([])
    setShowPremiumOnly(false)
  }

  return {
    searchTerm,
    setSearchTerm,
    activeTab,
    setActiveTab,
    selectedTags,
    setSelectedTags,
    showPremiumOnly,
    setShowPremiumOnly,
    filteredResources,
    hasActiveFilters,
    toggleTag,
    resetFilters,
  }
}
