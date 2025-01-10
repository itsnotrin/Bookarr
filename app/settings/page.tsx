import { Settings } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings - Bookarr',
}

export default function SettingsPage() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Settings className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold">Media Management</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {/* Media management settings will go here */}
              <p className="text-gray-500 dark:text-gray-400">
                Configure how Bookarr handles your book files
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold">User Interface</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {/* UI settings will go here */}
              <p className="text-gray-500 dark:text-gray-400">
                Customize the look and feel of Bookarr
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 