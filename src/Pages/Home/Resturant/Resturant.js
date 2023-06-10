import React from 'react';
import resturant from '../../../images/resturant.jpg';
const Resturant = () => {
    return (
        <div className='flex justify-between items-center '>
            <div className='w-1/2 text-center -mt-20 space-y-4'>
                <p className='italic'>History of</p>
                <h1 className='text-3xl font-bold'>Our Resturant</h1>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <button className='px-8 py-2 bg-yellow-600 text-white'>Our Story</button>
            </div>
            <div className='w-1/2'>
                <img className='w-full' src={resturant} alt="" />
            </div>
        </div>
    )
}
export default Resturant;