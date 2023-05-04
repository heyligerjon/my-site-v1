import * as Tabs from '@radix-ui/react-tabs';

export default function Experience() {
    return (
        <div id='experience' className='exp-container'>
            <h1 id='exp-header' className='section-header gradient'>Experience</h1>
            <div className='exp-tabs featurette'>
                <Tabs.Root className='TabsRoot' defaultValue='Tab1' orientation="vertical" style={{display: 'flex'}}>
                    <Tabs.List className='TabsList tab-list' aria-label='Past Experience'>
                        <Tabs.Trigger className='TabsTrigger tab tab-1 btn-gradient' value="Tab1">
                            Founder of crate.digital
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger tab tab-2 btn-gradient' value="Tab2">
                            Freelance Developer
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger tab tab-3 btn-gradient' value="Tab3">
                            Software Engineer
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger tab tab-4 btn-gradient' value="Tab4">
                            Implementation Consultant
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content className='TabsContent tab-content' value='Tab1'>
                        <h4>Founder of crate.digital</h4>
                        <h5>Detroit, MI</h5>
                        <h6>Mar 2023-Present</h6>
                        <p>add description 1 here</p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent tab-content' value='Tab2'>
                        <h4>Freelance Developer</h4>
                        <h5>Detroit, MI</h5>
                        <h6>Dec 2022-Present</h6>
                        <p>add description 2 here</p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent tab-content' value='Tab3'>
                        <h4>Software Engineer</h4>
                        <h5>Detroit, MI</h5>
                        <h6>Jan 2021-Nov 2022</h6>
                        <p className='description'>
                            As a software engineer, I was fortunate to work on some very challenging projects that taught me a lot about code in a professional setting. Through these experiences, I gained valuable insights into how complex systems are integrated and developed a real passion for delivering innovative solutions that make a difference. Here is a bit of what I accomplished in my time:
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
                                <li className='skills-list-detail'>SQL</li>
                            </ul>
                        </p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent tab-content' value='Tab4'>
                        <h5>Athens, GA</h5>
                        <h6>Aug 2015-May 2019</h6>
                        <p>add description 4 here</p>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
      );
}