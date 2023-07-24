import React from 'react'
import ContactForm from '@/components/contactform'
import Welcome  from '@/components/welcome'

export default function Home() {
    return (
        <main className='flex flex-col items-center'>
            <div id='home' className='container flex flex-col justify-center items-center'>
                <Welcome />
            </div>
            <ContactForm />
        </main>
    )
}