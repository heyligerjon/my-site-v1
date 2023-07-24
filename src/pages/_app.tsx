import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '@/components/nav';
import Footer from '@/components/footer'
import Drawing from '@/components/sketch';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='relative flex flex-col h-fit'>
      <Drawing />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
