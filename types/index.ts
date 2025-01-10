export interface Book {
  id: string
  title: string
  author: string
  isbn?: string
  overview?: string
  coverUrl?: string
  status: 'WANTED' | 'DOWNLOADED' | 'MONITORED' | 'UNMONITORED'
  addedAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  email: string
  name?: string
  isAdmin: boolean
} 