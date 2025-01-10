import { Activity } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Activity - Bookarr',
}

export default function ActivityPage() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Activity className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold">Activity</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">History</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {/* Activity items will be mapped here */}
            <div className="text-gray-500 dark:text-gray-400 text-center py-8">
              No history items
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 