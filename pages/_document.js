import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>

        <meta charset="utf-8"/>
        <title>youngvz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap" rel="stylesheet"/>

        <meta name="title" content="youngvz"/>
        <meta name="description" content="Vaporwave inspired website."/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://youngvz.io/"/>
        <meta property="og:title" content="youngvz"/>
        <meta property="og:description" content="Vaporwave inspired website."/>
        <meta property="og:image" content="https://s3.amazonaws.com/www.youngvz.io/assets/images/link_preview.png"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://youngvz.io/"/>
        <meta property="twitter:title" content="youngvz"/>
        <meta property="twitter:description" content="Vaporwave inspired website."/>
        <meta property="twitter:image" content="https://s3.amazonaws.com/www.youngvz.io/assets/images/link_preview.png"/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument