import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from "next/link";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function Nav() {
return (
    <NavigationMenu.Root className='NavigationMenuRoot mobile-nav' delayDuration={999999}>
        <NavigationMenu.List className='NavigationMenuList nav-links'>
            <NavigationMenu.Item>
                <NavigationMenu.Trigger className='NavigationMenuTrigger'>
                    <HamburgerMenuIcon className='nav-icon' width={40} height={40}/>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className='NavigationMenuContent'>
                    <NavigationMenu.Link asChild>
                        <Link href='/' className='nav nav-link nav-home'>
                            <p className='nav-p'>Home</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='about' className='nav nav-link nav-about'>
                            <p className='nav-p'>About</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='gallery' className='nav nav-link nav-gallery'>
                            <p className='nav-p'>Gallery</p>
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
                        <Link href='#contact' className='nav nav-link nav-contact'>
                            <p className='nav-p'>Contact</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='experience' className='nav nav-link nav-exp'>
                            <p className='nav-p'>View My Resume</p>
                        </Link>
                    </NavigationMenu.Link>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
        </NavigationMenu.List>
    </NavigationMenu.Root>
)}