import { Calendar } from 'lucide-react'

export default function CalendarPage() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Calendar className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold">Calendar</h1>
      </div>
      <div className="grid gap-4">
        {/* Calendar implementation will go here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p>Calendar view coming soon...</p>
        </div>
      </div>
    </div>
  )
} 