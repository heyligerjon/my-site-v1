import React, { useState, useEffect } from 'react'
import Image from "next/image";

const imgSrc = 'j-isaacs-headshot2.jpg'
const blurb = `\tGrowing up in Atlanta, I faced countless challenges in pursuit of my passion for technology. And though I turned to my other hobbies, music and sports, much of the time. My love for computing and science in general always shone through no matter what. From spending years determining the optimum method for storing my music library, to my fascination with mechanics, biological or otherwise, technology has permeated into every facet of my life. And in this it has led me to new, exciting challenges at every step of my journey.`

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

export default function About() {
    const [width, height] = useWindowSize();
    let flexDir
    let sz 
    let imgSz

    if(width <= 480) {
        sz = 'text-xs'
        imgSz = 350
    }
    else {
        sz = 'text-sm'
        imgSz = 500
    }

    if (width <= 960) {
        return (
            <main className='flex flex-col items-center w-full'>
                <div id='about' className={`container flex flex-col self-center items-center w-full`}>
                    <h1 id='about-header' className='z-10 mt-8 w-fit border-2 border-dark bg-trans'>
                        <p className='gradient-text'>About Me</p>
                        </h1>
                    <div className={`self-center my-4`}>
                        <Image 
                        className='' 
                        src={`/static/img/${imgSrc}`} 
                        alt='J. Isaacs' 
                        width={imgSz} 
                        height={imgSz}
                        blurDataURL='URL' 
                        placeholder='blur'
                        />
                    </div>
                    <div className={`flex ${sz} self-center p-4 -mt-24 mb-32 mx-8 border-2 border-dark bg-trans`}>
                        <p className='opacity-100'>
                            {blurb}
                        </p>
                    </div>
                </div>
            </main>
        );
    }
    else {
        return (
            <main className='flex flex-col items-center w-full'>
                <div id='about' className={`container flex ${flexDir} justify-between pt-40`}>
                    <div className={`self-center`}>
                        <Image 
                        className='' 
                        src={`/static/img/${imgSrc}`} 
                        alt='J. Isaacs' 
                        width={imgSz} 
                        height={imgSz}
                        blurDataURL='URL' 
                        placeholder='blur'
                        />
                    </div>
                    <h1 id='about-header' className='mt-8 mb-4 p-2 w-fit h-fit border-2 border-dark bg-trans'>
                        <p className='gradient-text'>About Me</p>
                    </h1>
                    <div className='absolute flex text-sm self-center w-1/2 left-[37.5%] border-2 border-dark bg-trans p-4'>
                        <p className='opacity-100'>
                            {blurb}
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}