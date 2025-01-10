'use client'

import { Book } from '@/types'
import { X, Save } from 'lucide-react'
import { useState } from 'react'

interface BookEditProps {
  book: Book
  onClose: () => void
  onSave: (book: Book) => Promise<void>
}

export default function BookEdit({ book, onClose, onSave }: BookEditProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState(book)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    try {
      await onSave(formData)
      onClose()
    } catch (error) {
      console.error('Failed to save book:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Edit Book</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium mb-1">
              Author
            </label>
            <input
              type="text"
              id="author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="isbn" className="block text-sm font-medium mb-1">
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              value={formData.isbn || ''}
              onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>

          <div>
            <label htmlFor="overview" className="block text-sm font-medium mb-1">
              Overview
            </label>
            <textarea
              id="overview"
              value={formData.overview || ''}
              onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
              rows={3}
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as Book['status'] })}
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            >
              <option value="WANTED">Wanted</option>
              <option value="DOWNLOADED">Downloaded</option>
              <option value="MONITORED">Monitored</option>
              <option value="UNMONITORED">Unmonitored</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              Cancel
            </button>
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