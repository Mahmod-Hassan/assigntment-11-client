import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/[A-Z]/.test(password)) {
            setError('at least one uppercase need');
            return;
        }
        if (!/[0-9]/.test(password)) {
            setError('set one digit at least');
            return;
        }
        if (password.length < 6) {
            setError('at least 6 character need')
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setError('');
                form.reset();
                toast.success('registration suceessfully');
                handleUpdateUserProfile(userName, photoURL);
            })
            .catch(err => toast.error(err.message))
    }

    const handleUpdateUserProfile = (userName, photoURL) => {
        const profile = {
            displayName: userName,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(result => console.log(result.user))
            .catch(err => console.log(err))
    }
    return (
        <div className="hero py-6 bg-base-200">
            <div className="card w-4/5 lg:w-2/4 shadow-2xl bg-base-100">

                <div className="card-body">
                    <h1 className='text-4xl font-bold text-center text-purple-600'>Register</h1>
                    <form onSubmit={handleRegister}>

                        {/* username is here */}
                        <div className="form-control">
                            <label className='mb-2'>User Name</label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered mb-4" required />
                        </div>

                        {/* username is here */}
                        <div className="form-control">
                            <label className='mb-2'>Photo Url</label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered mb-4" />
                        </div>

                        {/* email field is here */}
                        <div className="form-control">
                            <label className='mb-2'>Email</label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered mb-4" required />
                        </div>

                        {/* password field is here */}
                        <div className="form-control">
                            <label className='mb-2'>Password</label>
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                            <input type="password" placeholder="password"
                                name="password" className="input input-bordered mb-4" required />
                        </div>

                        {/* if new create an account is here */}
                        <p className='my-4 label-text'>Already have an account? <Link to='/login' className='link link-hover text-blue-600'>please login</Link></p>

                        <button type='submit' className='btn btn-primary w-full'>Sign Up</button>
                    </form>
                </div>

            </div>
        </div >
    );
};

export default Register;