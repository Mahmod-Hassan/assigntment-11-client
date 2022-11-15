import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero py-6 bg-base-200">
            <div className="card w-2/3 lg:w-1/3 shadow-2xl bg-base-100">

                <div className="card-body">
                    <h1 className='text-4xl font-bold text-center text-purple-600'>Login</h1>
                    <form onSubmit={handleLogin}>
                        {/* email field is here */}
                        <div className="form-control">
                            <label className='mb-2'>Email</label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>

                        {/* password field is here */}
                        <div className="form-control">
                            <label className='mb-2'>Password</label>
                            <input type="password" placeholder="password"
                                name="password" className="input input-bordered" />
                        </div>

                        {/* if new create an account is here */}
                        <p className='mt-6 label-text'>New to fruits panda? <Link to='/register' className='link link-hover text-blue-600'>create an account</Link></p>

                        <div className="flex items-center justify-between mt-4 gap-8">
                            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold border-0" type="submit">
                                Sign In
                            </button>
                            <a className="block font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </div >

    );
};

export default Login;