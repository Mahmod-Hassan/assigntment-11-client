import React from 'react';

const Team = () => {
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
        <div className='my-20'>
            <h2 className="text-3xl text-center text-gray-800 uppercase font-bold mb-10">Our Team</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {
            experts.map((expert,i) => <div key={i} className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
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

export default Team;