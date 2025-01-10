'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Book } from '@/types'

interface ImportBookModalProps {
  isOpen: boolean
  onClose: () => void
  onImport: (book: Partial<Book>) => Promise<void>
}

export default function ImportBookModal({ isOpen, onClose, onImport }: ImportBookModalProps) {
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const bookData: Partial<Book> = {
      title: formData.get('title') as string,
      author: formData.get('author') as string,
      isbn: formData.get('isbn') as string,
      overview: formData.get('overview') as string,
      status: 'WANTED',
    }

    try {
      await onImport(bookData)
      onClose()
    } catch (error) {
      console.error('Failed to import book:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Import Book</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
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
              name="title"
              required
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium mb-1">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              required
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>
          <div>
            <label htmlFor="isbn" className="block text-sm font-medium mb-1">
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>
          <div>
            <label htmlFor="overview" className="block text-sm font-medium mb-1">
              Overview
            </label>
            <textarea
              id="overview"
              name="overview"
              rows={3}
              className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            />
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
              className="px-4 py-2 bg-primary hover:bg-accent text-white rounded disabled:opacity-50"
            >
              {loading ? 'Importing...' : 'Import'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 