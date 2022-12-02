import React from 'react';

const OurExpert = () => {
    const experts = [
        {
            photo: 'https://media.istockphoto.com/id/1281703031/photo/chef-sharpening-knife.jpg?s=612x612&w=0&k=20&c=ZouULqOba6_LMLBrl8iLfYZhYTOSWWHcuyGk8ybIv1s=',
            name: 'Mahmod',
            experiance: 'KNIFE SKILLS'
        },
        {
            photo: 'https://c8.alamy.com/comp/C71J9W/chef-holding-a-tray-of-roast-chicken-C71J9W.jpg',
            name: 'Iqura',
            experiance: 'ROASTING'
        },
        {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfH5vTkRi0YG8TJl4Vv4x8e7VYBDYMYVEM_A&usqp=CAU',
            name: 'Miraz',
            experiance: ''
        },
    ]
    return (
        <div className='md:my-20'>
            <h2 className="text-5xl text-error text-center uppercase font-bold">My Cooking Expert</h2>
            <div className='grid md:grid-cols-3 md:gap-10'>
                {
                    experts.map((expert, idx) => <div
                        key={idx}
                    >
                        <img src={expert.photo} alt="" className='w-full h-80' />
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurExpert;