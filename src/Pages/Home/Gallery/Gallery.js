import React from 'react';
import image10 from '../../../images/image10.jpeg';
import image11 from '../../../images/image11.jpeg';
import image12 from '../../../images/image12.jpeg';
import image13 from '../../../images/image13.jpeg';
import image5 from '../../../images/image5.jpg';
import image6 from '../../../images/image6.jpg';
import image7 from '../../../images/image7.jpg';
import image8 from '../../../images/image8.jpeg';
import image9 from '../../../images/image9.jpeg';
const Gallery = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center mb-4'>Our Gallery</h1>
           <div className='grid grid-cols-2 md:grid-cols-6 md:grid-row-2'>
                <img className='h-48 md:h-full w-full md:row-span-2' src={image5} alt="" />
                <img className='h-48 w-full' src={image6} alt="" />
                <img className='h-48 w-full' src={image7} alt="" />
                <img className='h-48 w-full' src={image8} alt="" />
                <img className='h-48 w-full' src={image9} alt="" />
                <img className='h-48 md:h-full w-full md:row-span-2' src={image10} alt="" />
                <img className='h-48 w-full' src={image11} alt="" />
                <img className='h-48 w-full md:col-span-2' src={image12} alt="" />
                <img className='h-48 w-full hidden md:block' src={image13} alt="" />
           </div>
        </div>
        )
}
export default Gallery;