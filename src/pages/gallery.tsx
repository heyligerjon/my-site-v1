import Featurette from '@/components/featurette'

export default function Gallery() {
    return (
        <div id='gallery' className='mt-[57px] w-full'>
            <h1 id='gallery-header' className='mt-8 mb-4 ml-[10vw] w-fit gradient-text'>Gallery</h1>
            <Featurette />
        </div>
      );
}