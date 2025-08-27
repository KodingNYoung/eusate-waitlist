import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M7Y5L4KS2D"
        />
        <script id="g-analytics">
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-M7Y5L4KS2D');`}
        </script>
      </body>
    </Html>
  );
}
