import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    width: number
}

// window resize hook
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default function Welcome() {
    const [width, height] = useWindowSize();

    let nameSize
    let introSize
    let linksSize
    if(width <= 640) {
        nameSize = 'text-5xl'
        introSize = 'text-md'
        linksSize = 'text-sm'
    }
    else {
        nameSize = 'text-6xl'
        introSize = 'text-xl'
        linksSize = 'text-lg'
    }

    return(
        <div id='welcome' className='border-2 border-dark m-5 bg-trans'>
            <div id='home-text' className='p-4'>
                <Image className='image' src='/static/img/j-isaacs-headshot2.jpg' alt='J. Isaacs headshot' width={100} height={100}/>
                <p id='name' className={`${nameSize} gradient-text wired pt-1.5`}> 
                    j.isaacs
                </p>
                <p id='intro' className={`${introSize} pt-3`}>    
                    Freelance Developer & Digital Creator
                </p>
            </div>
            <div id='home-links' className={`flex ${linksSize} w-full gradient`}>
                <button id='about-button' className='btn w-1/4 px-4 py-2'>
                    <Link href='about'>
                        About
                    </Link>
                </button>
                <button id='gallery-btn' className='btn w-1/4 border-x px-4 py-2'>
                    <Link href='gallery'>
                        Gallery
                    </Link>
                </button>
                <button id='github-btn' className='btn w-1/4 px-4 py-2'>
                    <Link
                    href='https://github.com/heyligerjon'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        GitHub
                    </Link>
                </button>
                <button id='exp-btn' className='btn w-fit border-l px-4 py-2'>
                    <Link href='experience'>
                        Experience
                    </Link>
                </button>
            </div>
        </div>
    )
}