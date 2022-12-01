import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [token] = useToken(userEmail);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token])
    // Login with email and password
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('successfully logged in')
                form.reset();
                setUserEmail(email);
            })
            .catch(err => setError(err.message))
    }

    // SignIn With Google
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                savedUserToDatabase(user?.displayName, user?.email);
            })
            .catch(err => toast.error(err.message))
    }
    const savedUserToDatabase = (name, email) => {
        const user = { name, email };
        console.log(user);
        fetch(`http://localhost:5000/users?email=${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setUserEmail(email)
                    setError('');
                    toast.success('user created successfully')
                }
            })
    }
    return (
        <div className="hero py-6 bg-base-200">
            <div className="card w-4/5 lg:w-2/4 shadow-2xl bg-base-100">

                <div className="card-body">
                    <h1 className='text-4xl font-bold text-center text-purple-600'>Login</h1>
                    <form onSubmit={handleLogin}>
                        {/* email field is here */}
                        <div className="form-control">
                            <label className='mb-2'>Email</label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered mb-4" />
                        </div>

                        {/* password field is here */}
                        <div className="form-control">
                            <label className='mb-2'>Password</label>
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                            <input type="password" placeholder="password"
                                name="password" className="input input-bordered mb-4" />
                        </div>

                        {/* if new create an account is here */}
                        <p className='mt-4 label-text'>New to fruits panda? <Link to='/register' className='link link-hover text-blue-600'>create an account</Link></p>

                        <div className="flex items-center justify-between mt-4 gap-8">
                            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold border-0" type="submit">
                                Sign In
                            </button>
                            <a className="block font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
                                Forgot Password?
                            </a>
                        </div>
                        <button onClick={handleGoogleSignIn} className='btn btn-accent mt-6 w-full text-white'>GOOGLE SIGN IN</button>
                    </form>
                </div>

            </div>
        </div >

    );
};

export default Login;