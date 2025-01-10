'use client'

import { Book } from '@/types'
import { Grid, List, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface BookGridProps {
  books: Book[]
  onBookClick: (book: Book) => void
}

export default function BookGrid({ books, onBookClick }: BookGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No books found</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-end mb-4 space-x-2">
        <button
          onClick={() => setViewMode('grid')}
          className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
        >
          <Grid className="w-5 h-5" />
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
        >
          <List className="w-5 h-5" />
        </button>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onBookClick(book)}
            >
              <div className="relative aspect-[2/3] bg-gray-100 dark:bg-gray-700">
                <Image
                  src={book.coverUrl || '/images/logo.jpg'}
                  alt={book.title}
                  fill
                  className={`object-contain ${!book.coverUrl && 'p-8 dark:invert'}`}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold truncate">{book.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center space-x-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onBookClick(book)}
            >
              <div className="relative w-16 h-24 flex-shrink-0">
                <Image
                  src={book.coverUrl || '/placeholder-book.jpg'}
                  alt={book.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{book.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Status: {book.status}</p>
              </div>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 