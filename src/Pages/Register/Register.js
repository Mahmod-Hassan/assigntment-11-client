import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                form.reset();
                toast.success('registration suceessfully')
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div className="hero py-6 bg-base-200">
            <div className="card w-2/3 lg:w-1/3 shadow-2xl bg-base-100">

                <div className="card-body">
                    <h1 className='text-4xl font-bold text-center text-purple-600'>Register</h1>
                    <form onSubmit={handleRegister}>

                        {/* username is here */}
                        <div className="form-control">
                            <label className='mb-2'>User Name</label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered mb-4" />
                        </div>

                        {/* email field is here */}
                        <div className="form-control">
                            <label className='mb-2'>Email</label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered mb-4" />
                        </div>

                        {/* password field is here */}
                        <div className="form-control">
                            <label className='mb-2'>Password</label>
                            <input type="password" placeholder="password"
                                name="password" className="input input-bordered mb-4" />
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