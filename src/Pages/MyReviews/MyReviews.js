import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reviews/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
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
    );
};

export default MyReviews;