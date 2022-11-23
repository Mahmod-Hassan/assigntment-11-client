import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { img, description, service_name } = service;

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
        // <>
        //     <h2 className='text-4xl text-pink-700 text-center'>{service_name} Details</h2>
        //     <div className='grid grid-cols-1 md:grid-cols-2  md:gap-20 my-10'>
        //         <div>
        //             <img
        //                 src={img}
        //                 className="w-full"
        //             ></img>
        //             <h2 className='text-2xl text-error'>{service_name}</h2>
        //             <p>{description}</p>

        //         </div>

        //         <div className='shadow-lg'>
        //             <h2 className='text-4xl text-purple-500 text-center'>Add Reviews</h2>
        //             <form onSubmit={handleReview}>
        //                 <div className="form-control w-full px-5">
        //                     <label className="label">Name</label>
        //                     <input type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={user?.displayName} readOnly />
        //                 </div>
        //                 <div className="form-control w-full px-5">
        //                     <label className="label">Email</label>
        //                     <input type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
        //                 </div>
        //                 <div className="form-control w-full px-5">
        //                     <label className="label">Photo Url</label>
        //                     <input type="text" placeholder="Type here" className="input input-bordered w-full" defaultValue={user?.photoURL} readOnly />
        //                 </div>
        //                 <div className='px-5 my-4'>
        //                     <textarea name="text-area" className="textarea  textarea-bordered w-full" placeholder="Your review.."></textarea>
        //                 </div>
        //                 <button type="submit" className='btn'>Submit Review</button>

        //             </form>
        //         </div>
        //     </div>

        // </>

    );
};

export default ServiceDetails;