'use client'

import { useTheme } from '@/components/providers/ThemeProvider'
import { useSession } from 'next-auth/react'
import { Sun, Moon, Bell, User } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { data: session } = useSession()

  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button 
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
        <Link
          href="/profile"
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <User className="w-5 h-5" />
        </Link>
      </div>
    </header>
  )
} 