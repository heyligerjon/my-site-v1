//import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from "next/link"

export default function Nav() {
return (
    <div>
        <div className='nav nav-logo'>

        </div>
        <div className='nav nav-links'>
            <Link
            href='/'
            className='nav nav-link nav-home'
            >
                <h2 className='nav-icon'>
                    HomeIco{' '}
                </h2>
                <p className='nav-p'>
                    Home
                </p>
            </Link>

            <Link
            href='#about'
            className='nav nav-link nav-about'
            >
                <h2 className='nav-icon'>
                    AboutIco{' '}
                </h2>
                <p className='nav-p'>
                    About
                </p>
            </Link>

            <Link
            href='/featured'
            className='nav nav-link nav-featured'
            >
                <h2 className='nav-icon'>
                    FeaturedIco{' '}
                </h2>
                <p className='nav-p'>
                    Featured Projects
                </p>
            </Link>

            <Link
            href='https://github.com/heyligerjon'
            className='nav nav-link nav-github'
            target='_blank'
            rel='noopener noreferrer'
            >
                <h2 className='nav-icon'>
                    GitHubIco{' '}
                </h2>
                <p className='nav-p'>
                    GitHub
                </p>
            </Link>

            <Link
            href='/'
            className='nav nav-link nav-contact'
            >
                <h2 className='nav-icon'>
                    ContactIco{' '}
                </h2>
                <p className='nav-p'>
                    Contact
                </p>
            </Link>

            <Link
            href='/experience'
            className='nav nav-link nav-exp'
            >
                <h2 className='nav-icon'>
                    ExperienceIco{' '}
                </h2>
                <p className='nav-p'>
                    Experience
                </p>
            </Link>
        </div>
    </div>
)}