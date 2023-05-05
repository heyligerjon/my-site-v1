import * as Tabs from '@radix-ui/react-tabs';

export default function Experience() {
    return (
        <div id='experience' className='exp-container'>
            <h1 id='exp-header' className='section-header gradient'>Experience</h1>
            <div className='exp-tabs featurette'>
                <Tabs.Root className='TabsRoot' defaultValue='Tab1' orientation="vertical" style={{display: 'flex'}}>
                    <Tabs.List className='TabsList tab-list' aria-label='Past Experience'>
                        <Tabs.Trigger className='TabsTrigger tab tab-1 btn-gradient' value="Tab1">
                            Freelance Developer
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger tab tab-2 btn-gradient' value="Tab2">
                            Founder of crate.digital
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger tab tab-3 btn-gradient' value="Tab3">
                            Software Engineer
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger tab tab-4 btn-gradient' value="Tab4">
                            Implementation Consultant
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content className='TabsContent tab-content' value='Tab1'>
                        <h4>Freelance Developer</h4>
                        <h5>Detroit, MI</h5>
                        <h6>Dec 2022-Present</h6>
                        <p className='description'>
                            <div className='blurb'>
                                Following a massive personal upheaval, I found myself craving new direction. One that would allow me to pursue my passion for creative development. Leaving my job was an incredibly difficult decision, but I knew it was the right path. Starting this journey has been a mixture of excitement and uncertainty, as I figure out how to navigate an industry that moves faster than you can blink.
                            <br></br>
                            <br></br>
                                I have worked tirelessly on a range of projects that have allowed me to expand my skillset and grow as a web developer, and I am determined build a strong reputation for myself that will follow me wherever I go. Each day affords me countless opportunities to learn that I wake up every morning eager to embrace. Though it's still early days, I'm committed to putting in the hard work needed to succeed, and to building a fulfilling career that aligns with my passion for development.
                            </div>
                        </p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent tab-content' value='Tab2'>
                        <h4>Founder of crate.digital</h4>
                        <h5>Detroit, MI</h5>
                        <h6>Mar 2023-Present</h6>
                        <p className='description'>
                            <div className='blurb'>
                                Starting a digital media company has been a journey filled with unexpected challenges. From discovering new technologies and learning to navigate an ever-changing industry, to developing a brand identity to creating engaging material, every step has required a steep learning curve. However, each milestone reached has been a great source of pride, and I remain excited about the possibilities that lie ahead. Despite the obstacles, I am determined to succeed and continue growing my skills as an developer.
                            </div>
                        </p>
                        <p className='description'>
                            <h5>Skills</h5>
                            <ul className='tab-ul skills-list'>
                                <li className='skills-list-detail'>Python</li>
                                <li className='skills-list-detail'>React.js</li>
                                <li className='skills-list-detail'>HTML/CSS</li>
                            </ul>
                        </p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent tab-content' value='Tab3'>
                        <h4>Software Engineer</h4>
                        <h5>Detroit, MI</h5>
                        <h6>Jan 2021-Nov 2022</h6>
                        <p className='description'>
                            <div className='blurb'>
                                As a software engineer, I was fortunate to work on some very challenging projects that taught me a lot about code in a professional setting. Through these experiences, I gained valuable insights into how complex systems are integrated and developed a real passion for delivering innovative solutions that make a difference. Here is a bit of what I accomplished in my time:
                            </div>
                            <ul className='tab-ul exp-list'>
                                <li className='exp-list-detail'>
                                    Created a NASWA interface using a RESTful API to exchange web requests with over 5 million users
                                </li>
                                <li className='exp-list-detail'>
                                    Rebuilt legacy VB.NET code in C#, updating algorithms to increase performance in jobs by up to 70%
                                </li>
                            </ul>
                        </p>
                        <p className='description'>
                            <h5>Skills</h5>
                            <ul className='tab-ul skills-list'>
                                <li className='skills-list-detail'>C#</li>
                                <li className='skills-list-detail'>.NET 6</li>
                                <li className='skills-list-detail'>DB Management</li>
                            </ul>
                        </p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent tab-content' value='Tab4'>
                        <h4>Implementation Consultant</h4>
                        <h5>St. Paul, MN</h5>
                        <h6>Aug 2015-May 2019</h6>
                        <p className='description'>
                            <div className='blurb'>
                                As a consultant, I found great fulfillment in helping individuals in the organization find solutions that fit what they needed. From implementing new software to troubleshooting hardware issues, I enjoyed providing results that mattered. While the work was rewarding, I also desired a more technical challenge. Looking back, I'm very grateful for the professional experience and the opportunity to grow my skills in that area.
                            </div>
                            <ul className='tab-ul exp-list'>
                                <li className='exp-list-detail'>
                                    Implemented a fully automated, role-based security structure handling 1500 active users, reducing security requests by 90%
                                </li>
                                <li className='exp-list-detail'>
                                    Assisted with integration and deployment of full codebase conversion, along with security, database, and other tools for a team of 50+ developers
                                </li>
                            </ul>
                        </p>
                        <p className='description'>
                            <h5>Skills</h5>
                            <ul className='tab-ul skills-list'>
                                <li className='skills-list-detail'>SQL</li>
                                <li className='skills-list-detail'>Powershell</li>
                                <li className='skills-list-detail'>Visual Basic</li>
                            </ul>
                        </p>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
      );
}