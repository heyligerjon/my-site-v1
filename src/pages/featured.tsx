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
                            <h4 className='project-header'><code>crate.digital</code></h4>
                            <div className="card">
                                <p className='project-description'>
                                    <code>crate.digital</code> is an upcoming blog and digital media site focused on creating a space to promote underground musicians and artists organically. Like digging through a digital record crate.
                                </p>
                            </div>
                        </li>
                        {/* <li id='project-2' className='project-div'>
                            <h4 className='project-header'>Project 2</h4>
                            <div className="card">
                                <p className='project-description'>
                                    A simple social media web app that allows you to update statuses and communicate with users 
                                </p>
                            </div>
                        </li> */}
                        <li id='project-3' className='project-div'>
                            <h4 className='project-header'>Social Network</h4>
                            <div className="card">
                                <p className='project-description'>
                                A simple social media web app that allows you to update statuses and communicate with users 
                                </p>
                            </div>
                        </li>
                        <li id='project-4' className='project-div'>
                            <h4 className='project-header'>Wiki</h4>
                            <div className="card">
                                <p className='project-description'>
                                    A Wikipedia-like online encyclopedia, where entries can be viewed by visiting each entry's page.
                                </p>
                            </div>
                        </li>
                        <li id='project-5' className='project-div'>
                            <h4 className='project-header'>React ToDo</h4>
                            <div className="card">
                                <p className='project-description'>
                                    Single-page web app using React.js that allows users to create and edit a to-do list.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
      );
}