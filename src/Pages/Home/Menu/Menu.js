import React from 'react';


 const Menu = () => {
    return (
        <div className='my-10'>
           <h1 className='text-3xl font-bold text-center mb-4'>Our Menu</h1>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

            <div className='border text-center pb-5 rounded'>
                 <img className='w-full h-48' src="https://i.ibb.co/kSn8Zdm/image1.jpg" alt="" />
                 <div className='px-5 space-y-2'>
                 <h3 className='text-2xl font-semibold'>Food 1</h3>
                 <p className='text-red-400 text-xl font-bold'>price : $20</p>
                 <button className='py-2 bg-gray-200 rounded w-28'>Details</button>
                 </div>  
            </div>

            <div className='border text-center pb-5 rounded'>
                 <img className='w-full h-48' src="https://i.ibb.co/Zh6Zs70/image2.jpg" alt="" />
                 <div className='px-5 space-y-2'>
                 <h3 className='text-2xl font-semibold'>Food 1</h3>
                 <p className='text-red-400 text-xl font-bold'>price : $20</p>
                 <button className='py-2 bg-gray-200 rounded w-28'>Details</button>
                 </div>  
            </div>

            <div className='border text-center pb-5 rounded'>
                 <img className='w-full h-48' src="https://i.ibb.co/M18tmP0/image3.jpg" alt="" />
                 <div className='px-5 space-y-2'>
                 <h3 className='text-2xl font-semibold'>Food 1</h3>
                 <p className='text-red-400 text-xl font-bold'>price : $20</p>
                 <button className='py-2 bg-gray-200 rounded w-28'>Details</button>
                 </div>  
            </div>

            <div className='border text-center pb-5 rounded'>
                 <img className='w-full h-48' src="https://i.ibb.co/TcYynjx/image4.jpg" alt="" />
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