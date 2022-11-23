
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
        navigate('/');
    }
    const Links = <>
        <Link className='font-semibold mr-4 hover:text-red-500' to='/'>Home</Link>
        <Link className='font-semibold mr-4 hover:text-red-500' to='/services'>Services</Link>
        {
            user?.uid ?
                <>
                    <Link className='font-semibold mr-4 hover:text-red-500' to='/myreviews'>My Reviews</Link>
                    <button onClick={handleLogout} className="btn">Logout</button>
                </>

                :
                <>
                    <Link className='font-semibold mr-4 hover:text-red-500' to='/login'>Login</Link>
                    <Link className='font-semibold mr-4 hover:text-red-500' to='/register'>Register</Link>

                </>
        }
    </>
    return (
        <div className="navbar border h-20 mb-8 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow-md bg-base-100 w-28">
                        {Links}
                    </ul>
                </div>
                <Link to='/'>
                    <h1 className="text-3xl font-bold text-pink-500">CLASSIC <span className="text-sky-900">KITCHEN</span></h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu items-center menu-horizontal p-0">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email &&
                    <>
                        <span className='mr-2 text-gray-500'>{user.email}</span>
                        <img
                            src={user?.photoURL}
                            className='w-16 h-16 rounded-full'
                            alt=""
                        ></img>
                    </>

                }
            </div>
        </div>
    );
};

export default Header;