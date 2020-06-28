import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
        <link
            rel="preload"
            href="/fonts/Lato-Light.ttf"
            as="font"
            crossOrigin=""
          />
         <link
            rel="preload"
            href="/fonts/Lato-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        <link
            rel="preload"
            href="/fonts/Notable-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <title>Jackie Turof Web Developer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;