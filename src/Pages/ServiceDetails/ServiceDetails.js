
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { img, description, service_name } = service;
    const { data: reviews = [] } = useQuery({
        queryKey: ['all-reviews'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-reviews');
            const data = await res.json();
            return data;
        }
    })
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const review = {
            displayName: user?.displayName,
            email: user?.email,
            photoURL: user.photoURL,
            feedback: feedback,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('thanks for you feedback')
                    form.reset();
                }

            })
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />
                        <h1 className="text-3xl mt-5">{service_name}</h1>
                        <p className="py-6">{description}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleReview}>
                                <div className="form-control">
                                    <label className="label">Name</label>
                                    <input type="text" placeholder="email" className="input input-bordered" defaultValue={user?.displayName} />
                                </div>
                                <div className="form-control">
                                    <label className="label">Email</label>
                                    <input type="text" placeholder="password" className="input input-bordered" defaultValue={user?.email} />
                                </div>
                                <div className="form-control">
                                    <label className="label">Photo Url</label>
                                    <input type="text" placeholder="password" className="input input-bordered" defaultValue={user?.photoURL} />
                                </div>
                                <textarea name="feedback" className="textarea textarea-bordered w-full mt-2" placeholder="send feedback.."></textarea>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send Review</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4'>
                <h2 className="text-4xl text-center text-primary my-8">All Reviews are here</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map((review, idx) =>
                                    <tr key={review._id}>
                                        <th>{idx + 1}</th>
                                        <td><img src={review.photoURL} className="w-20" alt="" /></td>
                                        <td>{review.displayName}</td>
                                        <td>{review.feedback}</td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;