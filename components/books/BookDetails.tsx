'use client'

import { Book } from '@/types'
import { X, Edit2, Trash2, Download } from 'lucide-react'
import Image from 'next/image'

interface BookDetailsProps {
  book: Book
  onClose: () => void
  onEdit: (book: Book) => void
  onDelete: (book: Book) => void
}

export default function BookDetails({ book, onClose, onEdit, onDelete }: BookDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Book Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex gap-6">
            <div className="relative w-48 h-72 flex-shrink-0 bg-gray-100 dark:bg-gray-700">
              <Image
                src={book.coverUrl || '/images/logo.jpg'}
                alt={book.title}
                fill
                className={`object-contain rounded ${!book.coverUrl && 'p-8 dark:invert'}`}
              />
            </div>
            
            <div className="flex-grow">
              <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{book.author}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-200">Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300">{book.overview || 'No overview available'}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-200">Details</h3>
                  <dl className="grid grid-cols-2 gap-2 text-sm">
                    <dt className="text-gray-500 dark:text-gray-400">ISBN</dt>
                    <dd className="text-gray-700 dark:text-gray-200">{book.isbn || 'N/A'}</dd>
                    <dt className="text-gray-500 dark:text-gray-400">Status</dt>
                    <dd className="text-gray-700 dark:text-gray-200">{book.status}</dd>
                    <dt className="text-gray-500 dark:text-gray-400">Added</dt>
                    <dd className="text-gray-700 dark:text-gray-200">
                      {new Date(book.addedAt).toLocaleDateString()}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => onDelete(book)}
            className="flex items-center px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
          <button
            onClick={() => onEdit(book)}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Edit
          </button>
          <button className="flex items-center px-3 py-2 bg-primary hover:bg-accent text-white rounded">
            <Download className="w-4 h-4 mr-2" />
            Download
          </button>
        </div>
      </div>
    </div>
  )
} 