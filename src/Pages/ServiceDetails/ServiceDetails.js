import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const service = useLoaderData();
    const { img, description, service_name } = service;

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const review = {
            name: name,
            photoURL: user.photoURL,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
    }
    return (
        <>
            <h2 className='text-4xl text-pink-700 text-center'>{service_name} Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  md:gap-20 my-10'>
                <div>
                    <img
                        src={img}
                        className="w-full"
                    ></img>
                </div>
                <div className='p-5'>
                    <h2 className='text-2xl text-error'>{service_name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                <h2 className='text-4xl text-purple-500 text-center'>Add Reviews</h2>
                <form onSubmit={handleReview}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Name</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Email</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Photo Url</label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </form>
            </div>
        </>

    );
};

export default ServiceDetails;