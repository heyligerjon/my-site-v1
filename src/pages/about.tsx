import Image from "next/image";

export default function About() {
    return (
        <div id='about' className='about-container'>
            <h1 id='about-header' className='section-header'>About Me</h1>
            <div className='about-img'>
                <Image src='' alt='J. Isaacs headshot'/>
            </div>
            <div className='about-detail'>
                <p>This is the About page of my personal website.</p>
            </div>
        </div>
    );
}