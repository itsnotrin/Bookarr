import { AlertCircle, Filter, Plus } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wanted - Bookarr',
}

export default function WantedPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Wanted</h1>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-primary hover:bg-accent text-white rounded-lg">
            <Plus className="w-4 h-4" />
            <span>Add New</span>
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold">Missing Books</h2>
          </div>
          <div className="p-4">
            <div className="text-gray-500 dark:text-gray-400 text-center py-8">
              No books are currently missing
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold">Cut-off Unmet</h2>
          </div>
          <div className="p-4">
            <div className="text-gray-500 dark:text-gray-400 text-center py-8">
              No books with unmet cut-off
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 