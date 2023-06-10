
import React, { useContext, useState } from 'react';
import { HiMenu, HiOutlineSearch, HiX } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import tastyfood from '../../../images/tastyfood.png';
const Header = () => {
const [isOpen, setIsOpen] = useState(false);
    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
        navigate('/');
    }
    const Links = <>
        <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700' to='/'>Home</Link>
        <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700' to='/services'>Services</Link>
        <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700' to='/blogs'>Blogs</Link>
        {
            user?.uid ?
                <>
                    <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700' to='/my-reviews'>My Reviews</Link>
                    <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700' to='/add-service'>Add Service</Link>
                    <button onClick={handleLogout} className='text-gray-200 px-4 py-2 bg-gray-700 hover:bg-gray-600 hover:text-gray-400 rounded'>Logout</button>
                </>

                :
                <>
                    <Link className='text-gray-200 px-4 py-2 bg-gray-700 hover:bg-gray-600 hover:text-gray-400 rounded' to='/login'>Login</Link>

                </>
        }
    </>
    return (
        // <div className="navbar h-20 px-10 bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow-md bg-base-100 w-48">
        //                 <li>{user?.email}</li>
        //                 <li>{Links}</li>
        //             </ul>
        //         </div>
        //         <Link to='/'>
        //             <h1 className="text-3xl font-bold text-pink-500">CLASSIC <span className="text-sky-900">KITCHEN</span></h1>
        //         </Link>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu items-center menu-horizontal p-0">
        //             {Links}
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //     
        //     </div>
        // </div>
        <nav className="text-white shadow text-gray-400 bg-gray-800 md:px-10 md:flex justify-between items-center">
          
            <div className="flex justify-between">
              <Link to='/home'>
                <img className="w-20 h-20 bg-white rounded-full" src={tastyfood} alt="" />
              </Link>
              {/* Mobile menu button */}
              <div className="flex lg:hidden pr-5">
                <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-200 hover:text-gray-400 text-2xl" aria-label="toggle menu">
                  { isOpen ? <HiX></HiX> : <HiMenu></HiMenu>  }
                </button>
              </div>
            </div>
           
           
           
              <div className="relative hidden md:block">
                <HiOutlineSearch className='text-gray-400 absolute left-2 top-4'></HiOutlineSearch>
                <input type="text" className="w-full py-2 px-10  border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
              </div>

          
              <div className='bg-gray-800 absolute w-full md:w-auto md:static'>
                              <ul className={`flex flex-col md:space-x-2 ${isOpen? "block" : "hidden"} md:block`}>{Links}</ul> 
                              <div className='hidden lg:block'>
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
              
  
      </nav>
    );
};

export default Header;