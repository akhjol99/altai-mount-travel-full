// pages/_app.tsx
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
 
    <main className="stack">
      <Component {...pageProps} />
    </main>
  
    
  );
}
