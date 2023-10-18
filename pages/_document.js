import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="/static/favicons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/static/favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/static/favicons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/static/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="/static/favicons/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/static/favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/static/favicons/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicons/favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicons/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicons/favicon-128.png"
            sizes="128x128"
          />
          <meta name="msapplication-TileImage" content="/static/favicons/mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="/static/favicons/mstile-70x70.png" />
          <meta
            name="msapplication-square150x150logo"
            content="/static/favicons/mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/static/favicons/mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/static/favicons/mstile-310x310.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <meta
            name="description"
            content="Welcome to my personal blog where I share my Journey. I am a Software Engineer passionate about Scalable Web Applications, Data Systems and Artificial intelligence."
          />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
            integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
          <meta
            name="google-site-verification"
            content="p-BivLZjRfJtiUanGMyye5bDey74X_X7H5PI4IdW0Ow"
          />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-background-color dark:text-white">
          <Main />
          <NextScript />

          <div
            itemScope
            itemType="http://schema.org/Person"
            className="fiverr-seller-widget"
            style="display: inline-block;"
          >
            <a
              itemProp="url"
              href="https://www.fiverr.com/omniteleos"
              rel="nofollow noreferrer"
              target="_blank"
              style="display: inline-block;"
            >
              <div
                className="fiverr-seller-content"
                id="fiverr-seller-widget-content-610e8f3e-b262-405b-976a-f6a94c27a655"
                itemProp="contentURL"
                style="display: none;"
              ></div>
              <div id="fiverr-widget-seller-data" style="display: none;">
                <div itemProp="name">omniteleos</div>
                <div itemScope itemType="http://schema.org/Organization">
                  <span itemProp="name">Fiverr</span>
                </div>
                <div itemProp="jobtitle">Seller</div>
                <div itemProp="description">
                  I'm Tech Mornach, and my mission is simple: to help you succeed with tech that's
                  practical and budget-friendly. I offer scalable web solutions, super-accurate 3D
                  models, and eye-catching graphic designs. Why pick me? I'm all about
                  affordability, easy-to-use tech, flexibility, and a real commitment to your needs.
                  I'm not just a tech enthusiast; I'm your partner on the journey to a brighter
                  business future. Let's harness the power of tech to build your business.
                </div>
              </div>
            </a>
          </div>

          <script
            id="fiverr-seller-widget-script-610e8f3e-b262-405b-976a-f6a94c27a655"
            src="https://widgets.fiverr.com/api/v1/seller/omniteleos?widget_id=610e8f3e-b262-405b-976a-f6a94c27a655"
            data-config='{"category_name":"\n                                    Programming \u0026 Tech\n\n                            "}'
            async="true"
            defer="true"
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
