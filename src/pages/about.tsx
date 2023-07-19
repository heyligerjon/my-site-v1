import React, { useState, useEffect } from 'react'
import Image from "next/image";

const imgSrc = 'project3.png'
const blurb = `\tGrowing up in Atlanta, I faced countless challenges as I followed my passion for technology. But, though I turned to my other hobbies at times. My love for computing and science in general always shone through no matter what I did. spending years trying to determine the most efficient method of storing my music library. Technology has permeated into every facet of my life, and it has led me to a new exciting challenge every step of the way. \n\n\tI've grown to truly relish every opportunity I have to learn as I work. I am an incredibly motivated, goal-oriented individual who desires to learn as much as possible and reach many achievements along the way. I approach challenges with a level-headed, practical mindset, always looking for the best way forward. Whether I'm working on a project, learning a new skill, or collaborating with others, I'm focused on delivering results and exceeding expectations. With a drive for success and a willingness to work hard, I'm ready to take on anything along the way.`

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
                <div id='about' className={`container flex flex-col self-center items-center w-full mt-[57px]`}>
                    <h1 id='about-header' className='z-10 mt-8 w-fit gradient-text'>About Me</h1>
                    <div className='self-center my-4'>
                        <Image className='' src={`/static/img/${imgSrc}`} alt='J. Isaacs' width={imgSz} height={imgSz}/>
                    </div>
                    <div className={`flex ${sz} self-center p-4 -mt-32 mb-32 mx-8 border-2 border-dark bg-trans`}>
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
                <div id='about' className={`container flex ${flexDir} justify-between pt-[57px]`}>
                    <div className='self-center'>
                        <Image className='' src={`/static/img/${imgSrc}`} alt='J. Isaacs' width={imgSz} height={imgSz}/>
                    </div>
                    <h1 id='about-header' className='mt-8 mb-4 w-fit gradient-text'>About Me</h1>
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