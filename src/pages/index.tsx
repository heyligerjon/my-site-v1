import Image from 'next/image'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import ContactForm from '@/components/contactform'
import About  from '@/pages/about'
import Experience from '@/pages/experience' 
import Featured from '@/pages/featured'
import { Inter } from 'next/font/google'
import { GitHubLogoIcon, StarIcon, CodeIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleFormSubmit = () => {
    // Handle successful form submission
    console.log('Form submitted successfully!');
  };

  return (
    <main className=''>
        <div id='home' className='home-container'>
            <div className='welcome-container'>
                <p id='welcome' className='welcome-text'>
                    Hello, my name is
                </p>
                <p id='welcome-2' className='gradient'> 
                    J. Isaacs
                </p>
                <p id='welcome-3'>    
                    Founder of 
                <Link 
                href='https://www.crate.digital' 
                className='crate-link'
                target='_blank'
                rel='noopener'
                >
                    <code style={{fontSize: '19px'}}> crate.digital </code>
                </Link>
                    and Full-stack Web Developer
                </p>
                <button id='about-button' className='btn-gradient'>
                    <Link href='#about' className='nav nav-link nav-featured'>
                            More About Me
                    </Link>
                </button>
            </div>
            <NavigationMenu.Root className='NavigationMenuRoot home-nav'>
                <NavigationMenu.List className='NavigationMenuList nav-links'>
                    <NavigationMenu.Item className='nav-item nav-1'>
                        <NavigationMenu.Link asChild>
                            <Link href='#featured' className='nav nav-link nav-featured'>
                                <StarIcon className='nav-icon filter-navy' width={200} height={100}/>
                                <p className='nav-p'>Featured Projects</p>
                            </Link>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className='nav-item nav-2'>
                        <NavigationMenu.Link asChild>
                            <Link
                            href='https://github.com/heyligerjon'
                            className='nav nav-link nav-github'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <GitHubLogoIcon className='nav-icon filter-navy' width={100} height={100}/>
                                <p className='nav-p'>GitHub</p>
                            </Link>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className='nav-item nav-3'>
                        <NavigationMenu.Link asChild>
                            <Link href='#experience' className='nav nav-link nav-exp'>
                                <CodeIcon className='nav-icon filter-navy' width={100} height={100}/>
                                <p className='nav-p'>Experience</p>
                            </Link>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className='nav-item nav-4'>
                        <NavigationMenu.Link asChild>
                            <Link href='#contact' className='nav nav-link nav-contact'>
                                <EnvelopeOpenIcon className='nav-icon filter-navy' width={100} height={100}/>
                                <p className='nav-p'>Contact</p>
                            </Link>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
        <Featured />
        <Experience />
        <About />
        <ContactForm onSubmit={handleFormSubmit} />
    </main>
  )
}
