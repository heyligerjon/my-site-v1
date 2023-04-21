import * as Tabs from '@radix-ui/react-tabs';

export default function Experience() {
    return (
        <div id='experience' className='exp-container'>
            <h1 id='exp-header' className='section-header'>Experience</h1>
            <div className='exp-tabs'>
                <Tabs.Root className='TabsRoot' defaultValue='Tab1' orientation="vertical" style={{display: 'flex'}}>
                    <Tabs.List className='TabsList tab-list' aria-label='Past Experience' style={{display: 'flex', flexDirection: 'column'}}>
                        <Tabs.Trigger className='TabsTrigger tab tab-1' value="Tab1">
                            Founder of crate.digital
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger tab tab-2' value="Tab2">
                            Freelance Developer
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger tab tab-3' value="Tab3">
                            Software Engineer @ FAST Enterprises
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger tab tab-4' value="Tab4">
                            University of Georgia
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content className='TabsContent tab-content' value='Tab1'>
                        <h5>Mar 2023-Present</h5>
                        <h6>Detroit, MI</h6>
                        <p>add description 1 here</p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent tab-content' value='Tab2'>
                        <h5>Dec 2022-Present</h5>
                        <h6>Detroit, MI</h6>
                        <p>add description 2 here</p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent tab-content' value='Tab3'>
                        <h5>Aug 2019-Nov 2022</h5>
                        <h6>St. Paul, MN & Detroit, MI</h6>
                        <p>add description 3 here</p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent tab-content' value='Tab4'>
                        <h5>Aug 2015-May 2019</h5>
                        <h6>Athens, GA</h6>
                        <p>add description 4 here</p>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
      );
}