import { Library, Plus, Search } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Library - Bookarr',
}

export default function LibraryPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Library className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Library</h1>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
            <Search className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-primary hover:bg-accent text-white rounded-lg">
            <Plus className="w-4 h-4" />
            <span>Import Book</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Book Collection</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">0 Books</span>
          </div>
        </div>
        <div className="p-4">
          <div className="text-gray-500 dark:text-gray-400 text-center py-8">
            No books have been added to your library
          </div>
        </div>
      </div>
    </div>
  )
} 