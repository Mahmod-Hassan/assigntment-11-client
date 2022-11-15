import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const Links = <>
        <Link className='font-semibold mr-4 hover:text-red-500' to='/'>Home</Link>
        <Link className='font-semibold mr-4 hover:text-red-500' to='/products'>Products</Link>
        <Link className='font-semibold mr-4 hover:text-red-500' to='/login'>Login</Link>
        <Link className='font-semibold mr-4 hover:text-red-500' to='/register'>Register</Link>
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
                    <h1 className="text-3xl font-bold text-pink-500">FRUITS <span className="text-sky-900">PANDA</span></h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-error">Appoinment</button>
            </div>
        </div>
    );
};

export default Header;