import Image from "next/image";
//import Carousel from '@/components/carousel';

export default function Featured() {
    return (
        <div id='featured' className='feat-container'>
            <h1 id='feat-header' className='section-header gradient'>Featured Projects</h1>
            <div id="featurette" className="featurette">
                <div className='project-carousel'>
                    <ul className='featured-projects'>
                        <li id='project-1' className='project-div'>
                            <h4 className='project-header'>Project 1</h4>
                            <div className="card">
                                <p className='project-description'>
                                    <code>crate.digital</code> is an upcoming blog and digital media site focused on creating a space to promote underground musicians and artists organically. Like digging through a digital record crate.
                                </p>
                            </div>
                        </li>
                        <li id='project-2' className='project-div'>
                            <h4 className='project-header'>Project 2</h4>
                            <div className="card">
                                <p className='project-description'>
                                    A simple social media web app that allows you to update statuses and communicate with users 
                                </p>
                            </div>
                        </li>
                        <li id='project-3' className='project-div'>
                            <h4 className='project-header'>Project 3</h4>
                            <div className="card">
                                <p className='project-description'>
                                    This is a description for my third featured project.
                                </p>
                            </div>
                        </li>
                        <li id='project-4' className='project-div'>
                            <h4 className='project-header'>Project 4</h4>
                            <div className="card">
                                <p className='project-description'>
                                    This is a description for my fourth featured project.
                                </p>
                            </div>
                        </li>
                        <li id='project-5' className='project-div'>
                            <h4 className='project-header'>Project 5</h4>
                            <div className="card">
                                <p className='project-description'>
                                    This is a description for my fifth featured project.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
      );
}