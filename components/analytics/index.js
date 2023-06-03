import GAScript from './GoogleAnalytics'
import PlausibleScript from './Plausible'
import SimpleAnalyticsScript from './SimpleAnalytics'
import UmamiScript from './Umami'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <PlausibleScript />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalyticsScript />}
      {isProduction && siteMetadata.analytics.umamiWebsiteId && <UmamiScript />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GAScript />}
    </>
  )
}

export default Analytics
