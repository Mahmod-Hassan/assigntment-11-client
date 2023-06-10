import React from 'react';


const Features = () => {
    return (
        <div className='md:my-20'>
            <h1 className="text-3xl font-bold text-center mb-4">Our Features</h1>
            <div className='grid md:grid-cols-3 gap-10 text-center'>
                <div className='border-2 border-blue-400 rounded-lg p-10'>
                    <img className='w-36 h-36 mb-5 mx-auto' src="https://i.ibb.co/D7CMktp/4080032.png" alt="" />
                    <h2 className="text-2xl font-bold">Healthy Food</h2>
                    <p className='text-gray-500'>We alway delivery organic and fresh food.</p>
                </div>
                <div className='border-2 border-blue-400 rounded-lg p-10'>
                    <img className='w-40 h-40 mx-auto mb-2' src="https://i.ibb.co/C5fcLwS/delivery-png.jpg" alt="" />
                    <h2 className="text-2xl font-bold">Just time Deliver</h2>
                    <p className='text-gray-500'>We delivery our food on time. It's our duty.</p>
                </div>
                <div className='border-2 border-blue-400 rounded-lg p-10'>
                    <img className='w-40 h-40 mx-auto mb-2' src="https://i.ibb.co/fMt6D95/chepa.png" alt="" />
                    <h2 className="text-2xl font-bold">Cheap Rate</h2>
                    <p className='text-gray-500'>We sell food at very low prices thinking about all the customers</p>
                </div>
            </div>
        </div>

    );
};

export default Features;