import React, { useState, useLayoutEffect } from 'react'
import ContactForm from '@/components/contactform'
import Welcome  from '@/components/welcome'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [error, setError] = useState('');
    const [width, height] = useWindowSize();

    return (
        <main className='flex flex-col items-center'>
            <div id='home' className='container flex flex-col justify-center items-center'>
                <Welcome width={10}/>
            </div>
            <ContactForm />
        </main>
    )
}

// window resize hook
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}