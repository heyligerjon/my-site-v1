import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import Link from "next/link";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function Nav() {
return (
    <NavigationMenu.Root className='NavigationMenuRoot mobile-nav'>
        <NavigationMenu.List className='NavigationMenuList nav-links'>
            <NavigationMenu.Item>
                <NavigationMenu.Trigger className='NavigationMenuTrigger'>
                    <HamburgerMenuIcon className='nav-icon filter-navy' width={25} height={25}/>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className='NavigationMenuContent'>
                    <NavigationMenu.Link asChild>
                        <Link href='/' className='nav nav-link nav-home'>
                            <p className='nav-p'>Home</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='#about' className='nav nav-link nav-about'>
                            <p className='nav-p'>About</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='#featured' className='nav nav-link nav-featured'>
                            <p className='nav-p'>Featured Projects</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link
                        href='https://github.com/heyligerjon'
                        className='nav nav-link nav-github'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            <p className='nav-p'>GitHub</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='#experience' className='nav nav-link nav-exp'>
                            <p className='nav-p'>Experience</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='#contact' className='nav nav-link nav-contact'>
                            <p className='nav-p'>Contact</p>
                        </Link>
                    </NavigationMenu.Link>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
        </NavigationMenu.List>
    </NavigationMenu.Root>
)}