import React from 'react';










const Gallery = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center mb-4'>Our Gallery</h1>
           <div className='grid grid-cols-2 md:grid-cols-6 md:grid-row-2'>
                <img className='h-48 md:h-full w-full md:row-span-2' src="https://i.ibb.co/5rrkK5j/image5.jpg" alt="" />
                <img className='h-48 w-full' src="https://i.ibb.co/7nsSS0R/image6.jpg" alt="" />
                <img className='h-48 w-full' src="https://i.ibb.co/DLcqGGm/image7.jpg" alt="" />
                <img className='h-48 w-full' src="https://i.ibb.co/pJgK12B/image8.jpg" alt="" />
                <img className='h-48 w-full' src="https://i.ibb.co/xLrrHcV/image9.jpg" alt="" />
                <img className='h-48 md:h-full w-full md:row-span-2' src="https://i.ibb.co/tqrsNbB/image11.jpg" alt="" />
                <img className='h-48 w-full' src="https://i.ibb.co/xSpTwXS/image10.jpg" alt="" />
                <img className='h-48 w-full md:col-span-2' src="https://i.ibb.co/XtHwG71/image12.jpg" alt="" />
                <img className='h-48 w-full hidden md:block' src="https://i.ibb.co/F0Bsrx8/image13.jpg" alt="" />
           </div>
        </div>
        )
}
export default Gallery;