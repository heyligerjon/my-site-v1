import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import Link from "next/link";
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function Nav() {
return (
    <NavigationMenu.Root className='NavigationMenuRoot'>
        <NavigationMenu.List className='NavigationMenuList nav-links'>
            <NavigationMenu.Item>
                <NavigationMenu.Trigger className='NavigationMenuTrigger'>
                    <Image className='nav-icon' src='/static/img/Icon-code-working.svg' alt='Home' width={100} height={100} />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className='NavigationMenuContent'>
                    <NavigationMenu.Link asChild>
                        <Link href='/' className='nav nav-link nav-home'>
                            <p className='nav-p'>Home</p>
                        </Link>
                    </NavigationMenu.Link>
                </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
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
            </NavigationMenu.Item>

            <NavigationMenu.Item>
                <Link
                href='#featured'
                className='nav nav-link nav-featured'
                >
                    <h2 className='nav-icon'>
                        FeaturedIco{' '}
                    </h2>
                    <p className='nav-p'>
                        Featured Projects
                    </p>
                </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
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
            </NavigationMenu.Item>

            <NavigationMenu.Item>
                <Link
                href='#experience'
                className='nav nav-link nav-exp'
                >
                    <h2 className='nav-icon'>
                        ExperienceIco{' '}
                    </h2>
                    <p className='nav-p'>
                        Experience
                    </p>
                </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
                <Link
                href='#contact'
                className='nav nav-link nav-contact'
                >
                    <h2 className='nav-icon'>
                        ContactIco{' '}
                    </h2>
                    <p className='nav-p'>
                        Contact
                    </p>
                </Link>
            </NavigationMenu.Item>
        </NavigationMenu.List>
    </NavigationMenu.Root>
)}