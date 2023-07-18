import Image from "next/image";

export default function About() {
    return (
        <div id='about' className='container about-container'>
            <h1 id='about-header' className='section-header gradient-text'>About Me</h1>
            <div className='about-content'>
                <div className='about-img'>
                </div>
                <div className='about-detail'>
                    <p>
                        {`\tGrowing up in Atlanta, I faced countless challenges as I followed my passion for technology. But, though I turned to my other hobbies at times. My love for computing and science in general always shone through no matter what I did. spending years trying to determine the most efficient method of storing my music library. Technology has permeated into every facet of my life, and it has led me to a new exciting challenge every step of the way. \n\n\tI've grown to truly relish every opportunity I have to learn as I work. I am an incredibly motivated, goal-oriented individual who desires to learn as much as possible and reach many achievements along the way. I approach challenges with a level-headed, practical mindset, always looking for the best way forward. Whether I'm working on a project, learning a new skill, or collaborating with others, I'm focused on delivering results and exceeding expectations. With a drive for success and a willingness to work hard, I'm ready to take on anything along the way.`}
                    </p>
                </div>
            </div>
        </div>
    );
}