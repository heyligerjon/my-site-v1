import React, { useState, useEffect } from 'react'
import Image from 'next/image'

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

export default function Featurette() {
    const [width, height] = useWindowSize();

    return (
            <div id="featurette" className="flex justify-center w-full">
                <div className='w-full'>
                    <ul className='w-full snap-x snap-mandatory'>
                        <div className="relative canvas flex justify-around items-center bg-white max-h-[450px] w-full snap-center">
                            <button className='hide-md relative text-3xl self-start btn-gradient border-2 border-dark p-3 h-fit mt-8'>&lt;-</button>
                            <Image className='image' src='/static/img/j-isaacs-headshot2.jpg' alt='J. Isaacs headshot' width={Math.min(width,450)} height={Math.min(width,450)}/>
                            <button className='relative text-3xl self-start btn-gradient-2 border-2 border-dark p-3 h-fit mt-8'>-&gt;</button>
                            <div className='absolute project-description w-full'>
                                <h4 className='font-bold'>Project title</h4>
                                <p className='text-sm'>Project caption goes here</p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>  
      );
}