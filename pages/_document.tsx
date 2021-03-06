import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-r from-myblue to-mypurple dark:text-white dark:from-mydark-200 dark:to-mydark-700">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
