import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from "next/link";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function Nav() {
return (
    <NavigationMenu.Root id='navbar' className='NavigationMenuRoot w-full absolute z-20 bg-light' delayDuration={99999999}>
        <NavigationMenu.List className='NavigationMenuList border-b border-dark'>
            <NavigationMenu.Item className='h-fit flex flex-col'>
                <NavigationMenu.Trigger className='NavigationMenuTrigger'>
                    <HamburgerMenuIcon className='m-2' width={40} height={40}/>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className='NavigationMenuContent flex flex-col w-full'>
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
                        className='nav-link nav-github'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            <p className='nav-p'>GitHub</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='/#contact' className='nav nav-link nav-contact'>
                            <p className='nav-p'>Contact</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='experience' className='nav nav-link nav-exp'>
                            <p className='nav-p'>View My Resume</p>
                        </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link asChild>
                        <Link href='' className=''>
                            <p className=''> </p>
                        </Link>
                    </NavigationMenu.Link>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
        </NavigationMenu.List>
    </NavigationMenu.Root>
)}