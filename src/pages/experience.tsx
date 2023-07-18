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
    var nav = document.getElementById("navbar");

    if (nav) {
        nav.style.display = 'none';
    }

    return (
        <div id='experience' className='container flex justify-center self-center'>
            <Document className='' file='/static/files/react-resume.pdf'>
                <Page className='flex justify-end' pageNumber={1} width={width/2} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
        </div>
      );
}