import { getSession } from 'next-auth/react'
import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: 'desc',
      },
    })

    return res.json(
      entries.map((entry) => ({
        id: entry._id.toString(), // Use _id for MongoDB
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at,
      }))
    )
  }

  const session = await getSession({ req })
  const { email, name } = session.user

  if (!session) {
    return res.status(403).send('Unauthorized')
  }

  if (req.method === 'POST') {
    const newEntry = await prisma.guestbook.create({
      data: {
        email,
        body: (req.body.body || '').slice(0, 500),
        created_by: name,
      },
    })

    return res.status(200).json({
      id: newEntry._id.toString(), // Use _id for MongoDB
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at,
    })
  }

  return res.send('Method not allowed.')
}
