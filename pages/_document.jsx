// pages/_document.js

// import React from "react";
// import Document, { Html, Head, Main, NextScript } from "next/document";
// import { CssBaseline } from "@nextui-org/react";

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return {
//       ...initialProps,
//       styles: React.Children.toArray([initialProps.styles]),
//     };
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>{CssBaseline.flush()}</Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

// From the vercel/nextjs GitHub Repo, deprecated-main branch.
// https://github.com/vercel/next.js/blob/deprecated-main/examples/with-styled-components/pages/_document.js
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
