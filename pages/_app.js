import Head from 'next/head'
import '../styles/style.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta charSet="utf-8"/>
      <title>youngvz</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌊</text></svg>"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>

      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Vibur&display=swap" rel="stylesheet"/>

      <meta name="title" content="youngvz"/>
      <meta name="description" content="Vaporwave inspired website."/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://youngvz.io/"/>
      <meta property="og:title" content="youngvz"/>
      <meta property="og:description" content="Vaporwave inspired website."/>
      <meta property="og:image" content="https://youngvz.io/static/assets/images/link_preview.png"/>

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://youngvz.io/"/>
      <meta property="twitter:title" content="youngvz"/>
      <meta property="twitter:description" content="Vaporwave inspired website."/>
      <meta property="twitter:image" content="https://youngvz.io/static/assets/images/link_preview.png"/>
    </Head>
    <Component {...pageProps} />
    </>
  )
}