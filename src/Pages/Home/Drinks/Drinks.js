import React from 'react';

const Drinks = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center mb-5'>Our Drinks</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div>
                    <img className='h-64 w-full' src="https://i.ibb.co/wztvL0t/drink1.jpg" alt="" />
                </div>
                <div>
                    <img className='h-64 w-full' src="https://i.ibb.co/CMH0184/drink2.jpg" alt="" />
                </div>
                <div>
                    <img className='h-64 w-full' src="https://i.ibb.co/hfSNNGr/drink3.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Drinks;