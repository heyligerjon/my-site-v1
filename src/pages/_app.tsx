import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '@/components/nav';
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
