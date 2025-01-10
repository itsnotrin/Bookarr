import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession()
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const books = await prisma.book.findMany()
    return NextResponse.json(books)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await getServerSession()
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()
    const book = await prisma.book.create({
      data: {
        title: data.title,
        author: data.author,
        isbn: data.isbn,
        overview: data.overview,
        status: data.status || 'WANTED',
        coverUrl: data.coverUrl,
      },
    })
    return NextResponse.json(book)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 