import Image from "next/image";

export default function About() {
    return (
        <div id='about' className='about-container'>
            <h1 id='about-header' className='section-header gradient'>About Me</h1>
            <div className='about-content'>
                <div className='about-img'>
                    <Image className='image' src='/static/img/j-isaacs-headshot2.jpg' alt='J. Isaacs headshot' width={350} height={350}/>
                </div>
                <div className='about-detail'>
                    <p>
                        This is the About page of my personal website.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum      
                    </p>
                </div>
            </div>
        </div>
    );
}