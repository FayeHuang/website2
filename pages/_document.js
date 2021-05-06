import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// refs: https://github.com/mui-org/material-ui/tree/master/examples/nextjs
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="shortcut icon" href="favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="hibot-customerchat" appid="abc"></div>
          <script type="text/javascript" src="https://embed-chatbot.vercel.app/2.chunk.js"></script>
          <script type="text/javascript" src="https://embed-chatbot.vercel.app/runtime-main.js"></script>
          <script type="text/javascript" src="https://embed-chatbot.vercel.app/main.chunk.js"></script>
        </body>
      </Html>
    );
  }
}