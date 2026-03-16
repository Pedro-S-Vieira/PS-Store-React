import { prismaClient } from '@/lib/prisma'
import { OAuth2Client } from 'google-auth-library'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json()

    if (!idToken) {
      return NextResponse.json({ error: 'idToken is required' }, { status: 400 })
    }

    // Valida o token com o Google
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()

    if (!payload || !payload.email) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    // Cria ou busca o usuário no banco
    const user = await prismaClient.user.upsert({
      where: { email: payload.email },
      update: {
        name: payload.name,
        image: payload.picture,
      },
      create: {
        email: payload.email,
        name: payload.name,
        image: payload.picture,
      },
    })

    // Gera JWT próprio para o Flutter usar
    const secret = process.env.JWT_SECRET
    if (!secret) throw new Error('JWT_SECRET not defined')

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      secret,
      { expiresIn: '30d' }
    )

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
    })
  } catch (error) {
    console.error('Google auth error:', error)
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 })
  }
}
