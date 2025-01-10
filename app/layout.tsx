import { Open_Sans } from 'next/font/google'
import './globals.css'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import AuthProvider from '../components/providers/AuthProvider'
import { ThemeProvider } from '../components/providers/ThemeProvider'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata = {
  title: 'Bookarr',
  description: 'Book management system in the *arr suite style',
  icons: [
    {
      rel: 'icon',
      url: '/images/logo.jpg',
      type: 'image/jpeg',
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/logo.jpg',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body className={`${openSans.variable} font-sans`}>
        <AuthProvider>
          <ThemeProvider>
            <div className="flex h-screen">
              <Sidebar />
              <main className="flex-1 overflow-auto">
                <Header />
                <div className="p-6">
                  {children}
                </div>
              </main>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
} 