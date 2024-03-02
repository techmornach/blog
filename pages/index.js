import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import NewsletterForm from '@/components/NewsletterForm'
import ViewCounter from '@/components/ViewCounter'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">
                Ifedayo
              </span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              {`Welcome to ${siteMetadata.description}. I am a Software Engineer with passion for Web Applications and Machine Learning. In my free time, I like writing `}
              technical articles and learning new technologies.
            </h2>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
              This is my domain, where i share my{' '}
              <RoughNotation
                animate="true"
                type="box"
                show={true}
                color="#1E90FF"
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"
              >
                experience, ideologies and research.&nbsp;
              </RoughNotation>
              Have a good read!
            </p>
            <p className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              This is my domain, where i share my{' '}
              <RoughNotation
                animate="true"
                type="highlight"
                show={true}
                color="#1E90FF"
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"
              >
                experience, ideologies and research.&nbsp;
              </RoughNotation>
              Have a good read!{' '}
              <div className="mt-8 text-slate-600 dark:text-slate-400">
                <span className="text-sm">Press</span>{' '}
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  ⌘
                </span>{' '}
                <span className="text-sm">+ </span>
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  K
                </span>{' '}
                <span className="text-sm">to start</span>
              </div>
            </p>
          </div>
          {/* <div className="h-content sm:h-content-sm flex flex-col justify-around">
            <h1 className="sm:text-8.5xl tracking-tightest my-28 select-none text-center text-6xl font-extrabold leading-none sm:my-10">
              <span
                data-content="Blog."
                className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
              >
                <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
                  Blog.
                </span>
              </span>
              <span
                data-content="Coding."
                className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
              >
                <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
                  Coding.
                </span>
              </span>
              <span
                data-content="Portfolio."
                className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
              >
                <span className="animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent">
                  Portfolio.
                </span>
              </span>
            </h1>
          </div> */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/projects">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">What I built</span>
                      </span>
                      <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Projects&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/about">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">Read my story</span>
                      </span>
                      <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        About&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-blue-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/resume.pdf">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-fuchsia-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">
                          Hire me!&nbsp;&nbsp;&nbsp;
                        </span>
                      </span>
                      <span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Resume&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/gamezone">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <g>
                            <rect height="17.7051" opacity="0" width="28.5547" x="0" y="0" />
                            <path
                              d="M0 13.9355C0 16.2207 1.48438 17.7051 3.7207 17.7051C4.85352 17.7051 5.97656 17.2168 6.79688 16.2012L8.56445 14.0625C8.81836 13.7598 9.11133 13.6133 9.4043 13.6133L18.7891 13.6133C19.082 13.6133 19.375 13.7598 19.6289 14.0625L21.3965 16.2012C22.2168 17.2168 23.3398 17.7051 24.4727 17.7051C26.709 17.7051 28.1934 16.2207 28.1934 13.9355C28.1934 12.959 27.9688 11.8359 27.5879 10.5762C26.9922 8.57422 25.9473 5.84961 24.9512 3.74023C24.1113 1.98242 23.6816 1.18164 21.6113 0.712891C19.7754 0.292969 17.2266 0.00976562 14.1016 0.00976562C10.9766 0.00976562 8.41797 0.292969 6.58203 0.712891C4.51172 1.18164 4.08203 1.98242 3.24219 3.74023C2.24609 5.84961 1.20117 8.57422 0.605469 10.5762C0.224609 11.8359 0 12.959 0 13.9355ZM1.49414 13.9941C1.49414 13.3789 1.63086 12.6367 1.94336 11.5723C2.59766 9.32617 3.73047 6.41602 4.7168 4.25781C5.19531 3.21289 5.45898 2.57812 6.72852 2.28516C8.49609 1.86523 11.0156 1.58203 14.1016 1.58203C17.1777 1.58203 19.6973 1.86523 21.4648 2.28516C22.7344 2.57812 22.9883 3.21289 23.4766 4.25781C24.4824 6.41602 25.5664 9.33594 26.25 11.5723C26.5723 12.6367 26.6992 13.3789 26.6992 13.9941C26.6992 15.3418 25.752 16.1914 24.4922 16.1914C23.75 16.1914 23.0273 15.8008 22.4609 15.1074L20.625 12.8906C20.1562 12.3242 19.7656 12.041 18.8574 12.041L9.33594 12.041C8.42773 12.041 8.03711 12.3242 7.56836 12.8906L5.73242 15.1074C5.16602 15.8008 4.44336 16.1914 3.70117 16.1914C2.44141 16.1914 1.49414 15.3418 1.49414 13.9941Z"
                              fill="#ffffff"
                              fillOpacity="0.85"
                            />
                            <path
                              d="M6.19141 6.89453C6.19141 7.40234 6.49414 7.71484 7.00195 7.71484L8.75977 7.71484L8.75977 9.42383C8.75977 9.92188 9.04297 10.2344 9.53125 10.2344C10.0098 10.2344 10.3027 9.92188 10.3027 9.42383L10.3027 7.71484L11.9531 7.71484C12.5 7.71484 12.8223 7.40234 12.8223 6.89453C12.8223 6.40625 12.5 6.10352 11.9531 6.10352L10.3027 6.10352L10.3027 4.39453C10.3027 3.89648 10.0098 3.59375 9.53125 3.59375C9.04297 3.59375 8.75977 3.89648 8.75977 4.39453L8.75977 6.10352L7.00195 6.10352C6.49414 6.10352 6.19141 6.40625 6.19141 6.89453ZM20.166 6.79688C20.957 6.79688 21.5918 6.16211 21.5918 5.38086C21.5918 4.58984 20.957 3.95508 20.166 3.95508C19.3848 3.95508 18.7402 4.58984 18.7402 5.38086C18.7402 6.16211 19.3848 6.79688 20.166 6.79688ZM17.2949 9.6875C18.0762 9.6875 18.7207 9.05273 18.7207 8.27148C18.7207 7.48047 18.0762 6.8457 17.2949 6.8457C16.5137 6.8457 15.8691 7.48047 15.8691 8.27148C15.8691 9.05273 16.5137 9.6875 17.2949 9.6875Z"
                              fill="#ffffff"
                              fillOpacity="0.85"
                            />
                          </g>
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">Play my games</span>
                      </span>
                      <span className="pl-6 text-red-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        FunZone&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <li className="py-6">
                  <article>
                    <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                          {' • '}
                          <ViewCounter className="mx-1" slug={slug} />
                          views
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-4">
                        <div className="space-y-1">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                              >
                                {title}
                              </Link>
                            </h2>
                          </div>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                          <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-5 text-lg font-normal leading-6">
          <Link
            href="/blog"
            className=" special-underline-new text-primary-500 hover:text-gray-100 hover:no-underline dark:text-primary-500 hover:dark:text-gray-100"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">{<NewsletterForm />}</div>
      )}
    </>
  )
}
