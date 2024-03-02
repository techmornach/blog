import prisma from 'lib/prisma'

export default async function handler(req, res) {
  try {
    // Fetch all views from the MongoDB collection
    const allViews = await prisma.views.findMany()

    // Calculate the total count by summing up the count field of all views
    const totalCount = allViews.reduce((acc, view) => acc + view.count, 0)

    return res.status(200).json({ total: totalCount.toString() })
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
