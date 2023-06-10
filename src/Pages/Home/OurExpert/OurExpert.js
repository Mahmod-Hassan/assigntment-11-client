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
            name: 'Arman',
            experiance: 'ROASTING'
        },
        {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfH5vTkRi0YG8TJl4Vv4x8e7VYBDYMYVEM_A&usqp=CAU',
            name: 'Miraz',
            experiance: 'SAUTEEING'
        },
    ]
    return (
        // <div className='my-20'>
        //     <h2 className="text-5xl text-error text-center uppercase font-bold mb-10">My Cooking Expert</h2>
        //     <div className='grid md:grid-cols-3 gap-10'>
        //         {
        //             experts.map((expert, idx) => <div
        //                 key={idx} className='bg-slate-500 text-center p-5 rounded'
        //             >
        //                 <img src={expert.photo} alt="" className='w-4/5 h-80 mx-auto' />
        //                 <div className='flex justify-evenly text-slate-100 mt-4'>
        //                     <b>Name: {expert.name}</b>
        //                     <b>Expert: {expert.experiance}</b>
        //                 </div>
        //             </div>)
        //         }
        //     </div>
        // </div >
        <div className='my-20'>
            <h2 className="text-3xl text-center text-gray-800 uppercase font-bold mb-10">MEET MY <span className='text-blue-500'>CHEF</span></h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {
            experts.map((expert,i) => <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56" src={expert.photo} alt="avatar" />
            <div className="py-5 text-center">
              <p className='text-xl font-bold text-gray-800'>{expert.name}</p>
              <span className="text-sm text-gray-700 dark:text-gray-200">{expert.experiance}</span>
            </div>
            </div>)
        }
     
      </div>
      </div>
    );
};

export default OurExpert;