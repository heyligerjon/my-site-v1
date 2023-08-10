import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
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

export default function Experience() {
    
    const [width, height] = useWindowSize();

    // add logic to header and footer to hide on this page

    return (
        <div id='experience' className='flex mt-[57px] justify-center self-center'>
            <button className='relative text-3xl self-start -left-20 btn-gradient border-2 border-dark p-3 h-fit mt-8' onClick={() => history.back()}>&lt;-</button>
            <Document className='relative -left-4 h-fit' file='/static/files/react-resume.pdf'>
                <Page className='flex justify-end' pageNumber={1} width={width > 468? 500: width} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
        </div>
      );
}