import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);
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
                navigate(from, { replace: true });
                toast.success('registration suceessfully');
                handleUpdateUserProfile(name, photoUrl);
            })
            .catch(err => toast.error(err.message))
    }

    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl,
        }
        updateUserProfile(profile)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
            })
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
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered mb-4" required />
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