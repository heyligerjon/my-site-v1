import React, { useState, useEffect } from "react";
import p5Types from "p5";
import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

// window resize hook
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function useMousePosition() {
    const [mousePos, setMousePos] = useState([0, 0]);
  
    useEffect(() => {
      const updatePos = (event: MouseEvent) => {
        setMousePos([event.clientX, event.clientY]);
      };
  
      window.addEventListener('mousemove', updatePos);
      return () => {
        window.removeEventListener(
          'mousemove',
          updatePos
        );
      };
    }, []);

    return mousePos;
}

let spacing = 100;
export default function Drawing() {
    const [width, height] = useWindowSize();
    const [mouseX, mouseY] = useMousePosition();
    const [p5, setP5] = useState<any[]>([]);

    useEffect(() => {
        window.addEventListener('resize', windowResized);
        return () => window.removeEventListener('resize', windowResized);
    }, []);

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        setP5(p5)
        p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef);
    };

    const draw = (p5: p5Types) => {
        p5.background('#031320');
        p5.stroke(255)
        for(let i=0; i<width+50; i+=spacing+50){
            for(let j=0; j<height+50; j+=spacing+50){
                p5.push()
                let x = i - width/2 + 10
                let y = j - height/2 + 10
                p5.translate(x, y, -10)
                let angle = p5.atan2((mouseY - height/2) - y, (mouseX - width/2) - x)
                p5.rotateX(angle/1.25)
                p5.rotateY(angle/1.25)
                p5.rotateZ(angle/2)
                
                let d = p5.dist(i, j, mouseX, mouseY)
                p5.fill(11, 204, 165, 300 - d*2)
                p5.box(p5.min(spacing/2 + 2000/d, 100))
                p5.pop()
            }
        }
    }

    function windowResized() {
        // if(p5) {
        //     p5.resizeCanvas(width, height);
        // }
    }
    
    if (width > 768) {
        return( 
        <Sketch className='absolute z-[-1] w-full h-full' setup={setup} draw={draw} />
        ) 
    }
    else return(<></>)
}