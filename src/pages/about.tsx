import Image from "next/image";

export default function About() {
    return (
        <div id='about' className='about-container'>
            <h1 id='about-header' className='section-header'>About Me</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className='about-img' style={{width: '32.5%', height: 0, paddingBottom: '32.5%'}}>
                    <Image src='/static/img/j-isaacs-headshot2.jpg' alt='J. Isaacs headshot' width={350} height={350}/>
                </div>
                <div className='about-detail' style={{border: '2px solid white', borderRadius: '50px', padding: '25px', height: 'fit-content', maxWidth: '50%'}}>
                    <p>
                        This is the About page of my personal website.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum      
                    </p>
                </div>
            </div>
        </div>
    );
}