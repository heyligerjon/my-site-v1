import * as Tabs from '@radix-ui/react-tabs';

export default function Experience() {
    return (
        <div id='experience' className='exp-container'>
            <h1 id='exp-header' className='section-header'>Experience</h1>
            <div className='exp-tabs'>
                <Tabs.Root className='TabsRoot' defaultValue='Tab1' orientation="vertical" style={{display: 'flex'}}>
                    <Tabs.List className='TabsList' aria-label='Past Experience' style={{display: 'flex', flexDirection: 'column'}}>
                        <Tabs.Trigger className='TabsTrigger' value="Tab1" style={{border: '1px solid white'}}>
                            Founder of crate.digital
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger' value="Tab2" style={{border: '1px solid white'}}>
                            Freelance Developer
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger' value="Tab3" style={{border: '1px solid white'}}>
                            Software Engineer @ FAST Enterprises
                        </Tabs.Trigger>
                        <Tabs.Trigger className='TabsTrigger' value="Tab4" style={{border: '1px solid white'}}>
                            University of Georgia
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content className='TabsContent' value='Tab1' style={{border: '1px solid white'}}>
                        <p>add description 1 here</p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent' value='Tab2' style={{border: '1px solid white'}}>
                        <p>add description 2 here</p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent' value='Tab3' style={{border: '1px solid white'}}>
                        <p>add description 3 here</p>
                    </Tabs.Content>
                    <Tabs.Content className='TabsContent' value='Tab4' style={{border: '1px solid white'}}>
                        <p>add description 4 here</p>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
      );
}