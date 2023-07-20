import Featurette from '@/components/featurette'

export default function Gallery() {
    return (
        <div id='gallery' className='mt-[57px] mb-40 pt-24 w-full h-fit'>
            <h1 id='gallery-header' className='my-8 ml-[10vw] w-fit gradient-text'>Gallery</h1>
            <Featurette />
        </div>
      );
}