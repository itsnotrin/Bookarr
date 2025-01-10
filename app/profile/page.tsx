'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { User, Save } from 'lucide-react'

export default function ProfilePage() {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    try {
      // Update profile logic here
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error('Failed to update profile:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <User className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold">Profile Settings</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">User Information</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={session?.user?.email || ''}
              disabled
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Display Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={session?.user?.name || ''}
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium mb-1">
              API Key
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="apiKey"
                readOnly
                value="••••••••••••••••"
                className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-gray-100"
              />
              <button
                type="button"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Copy
              </button>
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-accent text-white rounded disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? 'Saving...' : 'Save Changes'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 