'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Activity, Library, Settings, Search, AlertCircle } from 'lucide-react'

const navigation = [
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Activity', href: '/activity', icon: Activity },
  { name: 'Library', href: '/library', icon: Library },
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Wanted', href: '/wanted', icon: AlertCircle },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 h-screen bg-sidebar-light dark:bg-sidebar-dark border-r border-gray-200 dark:border-gray-800">
      <div className="p-4">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.jpg"
            alt="Bookarr"
            className="w-8 h-8 dark:invert"
          />
          <span className="text-2xl font-bold text-primary">Bookarr</span>
        </Link>
      </div>
      <nav className="mt-4 space-y-1 px-2">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`sidebar-link ${pathname === item.href ? 'active' : ''}`}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
} 