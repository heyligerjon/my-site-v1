import React, { useState } from 'react'
import ContactForm from '@/components/contactform'
import Welcome  from '@/components/welcome'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [error, setError] = useState('');

    return (
        <main className='flex flex-col items-center'>
            <div id='home' className='container flex flex-col justify-center items-center'>
                <Welcome />
            </div>
            <ContactForm />
        </main>
    )
}