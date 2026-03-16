import { prismaClient } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const user = await prismaClient.user.findUnique({ where: { email } })

    if (!user || !user.password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const secret = process.env.JWT_SECRET
    if (!secret) throw new Error('JWT_SECRET not defined')

    const token = jwt.sign({ userId: user.id, email: user.email }, secret, {
      expiresIn: '30d',
    })

    return NextResponse.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
