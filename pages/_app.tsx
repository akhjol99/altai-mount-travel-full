// pages/_app.tsx
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://altaimount.com/" />
        <html lang="en" />
      </Head>
    <main className="stack">
      <Component {...pageProps} />
    </main>
    </>
    
  );
}
