import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

/* 
    canvas data object
    params:
    src(str req)
    alt(str req)
    detail
        tile(str opt)
        caption(str opt)
    mat(bool)
    width(number opt)
    height(number opt)
*/
interface Canvas {
    id: number;
    src: string;
    alt: string;
    detail?: {
        title?: string;
        caption?: string;
    }
    mat: boolean;
    width?: number;
    height?: number;
}

let data = [
{
    "id": 1,
    "src": '/static/img/gallery/crate.gif',
    "alt": 'crate.digital',
    "detail": {
        "title": 'crate.digital',
        "caption": `<a className='hover:text-[#4AF626] hover:font-["GlassTTY"] hover:text-[16px]' href='https://www.crate.digital'>crate.digital</a> is a digital media platform dedicated to promoting the discovery of independent musicians and artists.
        `,
    },
    "mat": false,
    "width": 0,
    "height": 0,
},
{
    "id": 2,
    "src": '/static/img/gallery/boxes.svg',
    "alt": 'boxes.svg',
    "detail": {
        "title": 'boxes',
        "caption": '',
    },
    "mat": true,
    "width": 0,
    "height": 0,
},
{
    "id": 3,
    "src": '/static/img/gallery/lines.svg',
    "alt": 'lines.svg',
    "detail": {
        "title": 'lines',
        "caption": '',
    },
    "mat": true,
    "width": 0,
    "height": 0,
}
]

type CanvasList = (typeof data);
const isCanvasList = (x: any): x is Canvas => true;

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
    const [canvases, setCanvases] = useState<CanvasList | undefined>(undefined);
    const [currentIndex, setCurrentIndex] = useState(0);

    const FetchCanvas = () => {
        setCanvases(data);
    }

    useEffect(() => {
        FetchCanvas();
    },[])

    //next and prev button functions
    function getNext() {
        var firstElement
        
        if(isCanvasList(canvases)){
            firstElement = canvases.shift();
            if (firstElement) {
                setCanvases([...canvases, firstElement]);
            }
            setCurrentIndex(currentIndex === canvases.length - 1 ? 0 : currentIndex + 1);
        }
    }

    function getPrev() {
        var lastElement 
        if(isCanvasList(canvases)) {
            lastElement = canvases.pop();
            if (lastElement) {
                setCanvases([...canvases, ]);
            }
            setCurrentIndex(currentIndex === 0 ? canvases.length - 1 : currentIndex - 1);
        }
    }

    var gallery
    if (isCanvasList(canvases)) {
        console.log(canvases);

        gallery = canvases?.map((canvas, index) => 
            <div key={index} className="relative canvas flex justify-around items-center h-fit max-h-[900px] w-full mt-auto snap-center">
                <button onClick={() => getPrev()} className='hide-md relative text-3xl self-start btn-gradient border-2 border-dark p-3 h-fit mt-8'>&lt;-</button>
                <Image className={canvas.mat? 'mat' : ''} src={canvas.src} alt={canvas.alt} width={canvas.width === 0? Math.min(height,900) : canvas.width} height={canvas.height === 0? Math.min(height,450) : canvas.height}/>
                <button onClick={() => getNext()} className='relative text-3xl self-start btn-gradient border-2 border-dark p-3 h-fit mt-8'>-&gt;</button>
                <div className='absolute project-description w-full'>
                    <h4 className='font-bold text-left ml-[10vw] pt-2'>{parse(canvas.detail.title)}</h4>
                    <p className='text-sm text-left ml-[10vw] pt-2'>{parse(canvas.detail.caption)}</p>
                </div>
            </div>
        );
    }


    return (
        <div id="featurette" className="flex justify-center w-full h-full">
            <div className='w-full'>
                <ul className='w-full h-full snap-x snap-mandatory'>
                    {gallery && width > 468? gallery[currentIndex] : gallery}
                </ul>
            </div>
        </div>  
      );
}