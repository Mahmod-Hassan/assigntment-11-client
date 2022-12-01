import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditReview = () => {
    const review = useLoaderData();
    const navigate = useNavigate();
    const handleEditReview = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        fetch(`http://localhost:5000/edit-review/${review?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your review edited successfully');
                    navigate('/my-reviews')
                }
            })
    }
    return (
        <div>
            <h2 className="text-4xl text-primary text-center my-5 font-bold">Edit Your Review</h2>
            <form onSubmit={handleEditReview} className='w-96 mx-auto shadow-lg p-5'>
                <label>Your previous review</label>
                <textarea name="feedback" className="textarea textarea-bordered w-full mt-2" placeholder={review?.feedback}></textarea>

                <button type='submit' className="btn btn-primary mt-4">Update Review</button>
            </form>
        </div>
    );
};

export default EditReview;