'use client'

import { useState, useEffect } from 'react'
import { HardDrive, Cpu, Download, Upload } from 'lucide-react'

interface SystemStats {
  cpuUsage: number
  memoryUsage: number
  diskSpace: {
    total: number
    used: number
  }
  network: {
    download: number
    upload: number
  }
}

export default function SystemStatus() {
  const [stats, setStats] = useState<SystemStats>({
    cpuUsage: 0,
    memoryUsage: 0,
    diskSpace: {
      total: 0,
      used: 0
    },
    network: {
      download: 0,
      upload: 0
    }
  })

  useEffect(() => {
    // Mock data updates - replace with real API calls
    const interval = setInterval(() => {
      setStats({
        cpuUsage: Math.random() * 100,
        memoryUsage: Math.random() * 100,
        diskSpace: {
          total: 1000,
          used: Math.random() * 1000
        },
        network: {
          download: Math.random() * 100,
          upload: Math.random() * 50
        }
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Cpu className="w-5 h-5 text-primary" />
          <h3 className="font-medium">CPU</h3>
        </div>
        <div className="text-2xl font-bold">{stats.cpuUsage.toFixed(1)}%</div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-2">
          <HardDrive className="w-5 h-5 text-primary" />
          <h3 className="font-medium">Disk Space</h3>
        </div>
        <div className="text-2xl font-bold">
          {(stats.diskSpace.used / stats.diskSpace.total * 100).toFixed(1)}%
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Download className="w-5 h-5 text-primary" />
          <h3 className="font-medium">Download</h3>
        </div>
        <div className="text-2xl font-bold">{stats.network.download.toFixed(1)} MB/s</div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Upload className="w-5 h-5 text-primary" />
          <h3 className="font-medium">Upload</h3>
        </div>
        <div className="text-2xl font-bold">{stats.network.upload.toFixed(1)} MB/s</div>
      </div>
    </div>
  )
} 