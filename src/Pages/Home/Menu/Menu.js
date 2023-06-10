import React from 'react';
import image1 from '../../../images/image1.jpeg';
import image2 from '../../../images/image2.jpeg';
import image3 from '../../../images/image3.jpeg';
import image4 from '../../../images/image4.jpg';
 const Menu = () => {
    return (
        <div className='my-10'>
           <h1 className='text-3xl font-bold text-center mb-4'>Our Menu</h1>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

            <div className='border text-center pb-5 rounded'>
                 <img className='w-full h-48' src={image1} alt="" />
                 <div className='px-5 space-y-2'>
                 <h3 className='text-2xl font-semibold'>Food 1</h3>
                 <p className='text-red-400 text-xl font-bold'>price : $20</p>
                 <button className='py-2 bg-gray-200 rounded w-28'>Details</button>
                 </div>  
            </div>

            <div className='border text-center pb-5 rounded'>
                 <img className='w-full h-48' src={image2} alt="" />
                 <div className='px-5 space-y-2'>
                 <h3 className='text-2xl font-semibold'>Food 1</h3>
                 <p className='text-red-400 text-xl font-bold'>price : $20</p>
                 <button className='py-2 bg-gray-200 rounded w-28'>Details</button>
                 </div>  
            </div>

            <div className='border text-center pb-5 rounded'>
                 <img className='w-full h-48' src={image3} alt="" />
                 <div className='px-5 space-y-2'>
                 <h3 className='text-2xl font-semibold'>Food 1</h3>
                 <p className='text-red-400 text-xl font-bold'>price : $20</p>
                 <button className='py-2 bg-gray-200 rounded w-28'>Details</button>
                 </div>  
            </div>

            <div className='border text-center pb-5 rounded'>
                 <img className='w-full h-48' src={image4} alt="" />
                 <div className='px-5 space-y-2'>
                 <h3 className='text-2xl font-semibold'>Food 1</h3>
                 <p className='text-red-400 text-xl font-bold'>price : $20</p>
                 <button className='py-2 bg-gray-200 rounded w-28'>Details</button>
                 </div>  
            </div>
           </div>
        </div>
    )
}
export default Menu;