import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['my-reviews', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-reviews?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('are you sure want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/delete-my-reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('your review deleted successfully');
                        refetch();
                    }
                })
        }
    }


    return (
        <div>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>No .</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Review</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    {
                        reviews.map((review, idx) =>
                            <tr key={review._id}>
                                <th>{idx + 1}</th>
                                <td><img src={review.photoURL} className="w-20" alt="" /></td>
                                <td>{review.displayName}</td>
                                <td>{review.feedback}</td>
                                <td><button onClick={() => handleDelete(review._id)} className='btn btn-sm btn-error text-white'>delete</button></td>
                            </tr>)
                    }

                </tbody>

            </table>
            {
                reviews.length === 0 && <div className='md:flex justify-center items-center lg:h-[400px] text-red-500'>
                    <p className=''>NO revivews were added </p>
                </div>
            }

        </div>
    );
};

export default MyReviews;