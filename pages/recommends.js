import siteMetadata from '@/data/siteMetadata'
import movieData from '@/data/movieData'
import bookData from '@/data/bookData'
import RecommendCard from '@/components/RecommendCard'
import { PageSEO } from '@/components/SEO'

/* export async function getStaticProps() {
  const reviews = await getReviews({ limit: 10 })
  const currentlyReading = await getCurrentlyReading({ limit: 2 })

  return { props: { reviews, currentlyReading } }
} */

export default function Recommends(reviews) {
  return (
    <>
      <PageSEO
        title={`Recommendations - ${siteMetadata.author}`}
        description="Recommended movies, books and more"
      />
      <div className="mx-auto max-w-3xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recommends
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            A list of recommended movies, books and more
          </p>
        </div>
        <div className="space-y-2 pt-3 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            <span role="img" className="mr-4" aria-label="wave">
              📚
            </span>
            Books
          </h2>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            There is no friend as loyal as a book
          </p>
        </div>

        <div className="container py-4">
          <div className="-m-4 flex flex-wrap">
            {bookData.map((d) => (
              <RecommendCard
                key={d.title}
                title={d.title}
                description={d.description}
                tags={d.tags}
                href={d.href}
              />
            ))}
          </div>
        </div>

        <div className="container py-7">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              <span role="img" className="mr-4" aria-label="wave">
                🍿
              </span>
              Movies
            </h2>
            <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
              Cinema is the most beautiful fraud in the world.
            </p>
          </div>
          <div className="container py-4">
            <div className="-m-4 flex flex-wrap">
              {movieData.map((d) => (
                <RecommendCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  tags={d.tags}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
