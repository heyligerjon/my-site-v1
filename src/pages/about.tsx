import Image from "next/image";

export default function About() {
    return (
        <div id='about' className='about-container'>
            <h1 id='about-header' className='section-header'>About Me</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className='about-img' style={{width: '32.5%', height: 0, paddingBottom: '32.5%'}}>
                    <Image src='/static/img/j-isaacs-headshot2.jpg' alt='J. Isaacs headshot' width={350} height={350}/>
                </div>
                <div className='about-detail'>
                    <p>This is the About page of my personal website.</p>
                </div>
            </div>
        </div>
    );
}