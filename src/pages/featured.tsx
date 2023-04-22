import Image from "next/image";

export default function Featured() {
    return (
        <div id='featured' className='feat-container'>
          <h1 id='feat-header' className='section-header gradient'>Featured Projects</h1>
          <div className='project-carousel'>
            <ul className='featured-projects'>
                <li id='project-1' className='project'>
                    <h4 className='project-header'>Project 1</h4>
                    <Image className='project-img' src={""} alt={""} />
                    <p className='project-description'>
                        This is a description for my first featured project.
                    </p>
                </li>
                <li id='project-2' className='project'>
                    <h4 className='project-header'>Project 2</h4>
                    <Image className='project-img' src={""} alt={""} />
                    <p className='project-description'>
                        This is a description for my second featured project.
                    </p>
                </li>
                <li id='project-3' className='project'>
                    <h4 className='project-header'>Project 3</h4>
                    <Image className='project-img' src={""} alt={""} />
                    <p className='project-description'>
                        This is a description for my third featured project.
                    </p>
                </li>
                <li id='project-4' className='project'>
                    <h4 className='project-header'>Project 4</h4>
                    <Image className='project-img' src={""} alt={""} />
                    <p className='project-description'>
                        This is a description for my fourth featured project.
                    </p>
                </li>
                <li id='project-5' className='project'>
                    <h4 className='project-header'>Project 5</h4>
                    <Image className='project-img' src={""} alt={""} />
                    <p className='project-description'>
                        This is a description for my fifth featured project.
                    </p>
                </li>
            </ul>
          </div>
        </div>
      );
}