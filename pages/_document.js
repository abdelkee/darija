import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/darijaIcon.png"></link>
          <link rel="icon" href="/darijaIcon.png" />
          <meta name="description" content="Tahar babouche business app" />
          <meta name="theme-color" content="#17303c" />
          <meta name="mobile-web-app-capable" content="yes"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;