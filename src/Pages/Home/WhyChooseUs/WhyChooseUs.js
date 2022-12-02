import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='md:my-20'>
            <h2 className="text-5xl text-success font-bold text-center uppercase">Why Choose Us</h2>
            <p className='w-4/5 md:w-1/2 mx-auto text-slate-500 my-4'>We are taking restaurants to a whole new place. Where seamless delivery is prioritized, costs are minimized, and profits are maximized. And all you have to do is cook.</p>
            <div className='grid md:grid-cols-3 gap-10'>
                <div className='shadow p-10'>
                    <h2 className="text-2xl font-bold text-red-500">(1) Healthy Food</h2>
                    <p className='footer-title'>We alway delivery organic and fresh food.</p>
                </div>
                <div className='shadow p-10'>
                    <h2 className="text-2xl font-bold text-red-500">(2) Just time Deliver</h2>
                    <p className='footer-title'>We delivery our food on time. It's our duty.</p>
                </div>
                <div className='shadow p-10'>
                    <h2 className="text-2xl font-bold text-red-500">(3) Cheap Rate</h2>
                    <p className='footer-title'>We sell food at very low prices thinking about all the customers</p>
                </div>
            </div>
        </div>

    );
};

export default WhyChooseUs;