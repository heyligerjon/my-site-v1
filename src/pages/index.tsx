import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/contactform'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleFormSubmit = () => {
    // Handle successful form submission
    console.log('Form submitted successfully!');
  };
  
  return (
    <main className=''>
      <div className='home-container'>
        <div className='welcome-container'>
          <p className='welcome'>
            Hello, my name is J. Isaacs, Freelance Developer and Founder of
            <Link 
            href='https://www.crate.digital' 
            className='crate-link'
            target='_blank'
            rel='noopener'
            >
              <code className='font-mono font-bold'> crate.digital</code>
            </Link>
          </p>
          <button type='button'>
                <Link
                href='/about'
                className='nav nav-link nav-featured'
                >
                    <h2 className='nav-header'>
                        More About Me{' '}
                    </h2>
                </Link>
            </button>
        </div>
        <div className='contact-container'>
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </main>
  )
}
