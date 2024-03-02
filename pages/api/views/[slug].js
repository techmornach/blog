import prisma from 'lib/prisma'

export default async function handler(req, res) {
  try {
    const slug = req.query.slug.toString()

    if (req.method === 'POST') {
      // Upsert functionality is not directly available in MongoDB
      // You'll need to handle creation or update manually
      let newOrUpdatedViews = await prisma.views.findUnique({
        where: {
          slug,
        },
      })

      if (!newOrUpdatedViews) {
        // If the view with the specified slug doesn't exist, create a new one
        newOrUpdatedViews = await prisma.views.create({
          data: {
            slug,
            count: 1, // Initialize count to 1
          },
        })
      } else {
        // If the view exists, update its count by incrementing by 1
        newOrUpdatedViews = await prisma.views.update({
          where: {
            slug,
          },
          data: {
            count: newOrUpdatedViews.count + 1,
          },
        })
      }

      return res.status(200).json({
        total: newOrUpdatedViews.count.toString(),
      })
    }

    if (req.method === 'GET') {
      // Retrieve the view with the specified slug
      const views = await prisma.views.findUnique({
        where: {
          slug,
        },
      })

      return res.status(200).json({ total: views?.count?.toString?.() || 0 })
    }
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
