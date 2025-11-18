// pages/_app.tsx
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // This single class controls the spacing between all top-level sections
    <main className="stack">
      <Component {...pageProps} />
    </main>
  );
}
