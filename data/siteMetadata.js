const siteMetadata = {
  title: 'Blog | Taiwo Ifedayo',
  author: 'Taiwo Ifedayo',
  headerTitle: 'Peasant to Mornachy',
  description: 'My personal blog where I share my journey and ideas',
  snippets: 'Reuseable code snippets collected by Ifedayo',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://techmornach.vercel.app',
  siteRepo: 'https://github.com/anonymousMornach/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'techmornach@gmail.com',
  github: 'https://github.com/anonymousMornach',
  twitter: 'https://twitter.com/taiwoifedayo4',
  linkedin: 'https://www.linkedin.com/in/tech-mornach/',
  website: 'https://taiwoifedayo.vercel.app',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: 'techmornach.vercel.app', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '43953bed-40dd-4022-9de8-e714d5b70587', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-1L8Y75YERZ', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'taiwoifedayo4',
  },
}

module.exports = siteMetadata
