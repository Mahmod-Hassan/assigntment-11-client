
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
        <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700 transition-colors duration-300' to='/'>Home</Link>
        <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700 services transition-colors duration-300' to='/services'>Services</Link>
        <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700 transition-colors duration-300' to='/blogs'>Blogs</Link>
        {
            user?.uid ?
                <>
                    <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700 transition-colors duration-300' to='/my-reviews'>My Reviews</Link>
                    <Link className='text-gray-200 px-2 py-2 hover:bg-gray-700 transition-colors duration-300' to='/add-service'>Add Service</Link>
                    <button onClick={handleLogout} className='px-4 py-2 bg-lime-400 hover:bg-gray-600 hover:text-gray-400 rounded'>Logout</button>
                </>

                :
                <>
                    <Link className='px-4 py-2 bg-lime-400 hover:bg-gray-600 hover:text-gray-400 rounded' to='/login'>Login</Link>

                </>
        }
    </>
    return (
      
        <nav className="text-white sticky top-0 shadow bg-gray-800 md:px-10 md:flex justify-between items-center z-40">
          
            <div className="flex justify-between">
              <Link to='/'>
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
                <HiOutlineSearch className='text-gray-400 absolute left-2 top-3.5'></HiOutlineSearch>
                <input type="text" className="w-full py-2 px-8  border rounded-lg bg-gray-600 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="search food" />
              </div>

          
              <div className='flex gap-4 items-center absolute w-full md:w-auto md:static'>
                    <ul className={`flex flex-col md:flex-row md:space-x-2 ${isOpen? "block py-5 md:py-0" : "hidden"} md:block`}>{Links}
                    </ul> 
                    
                    <div className='hidden lg:block'>
                    {
                          user?.email &&
                          <>
                              {/* <span className='mr-2 text-gray-500'>{user.email}</span> */}
                              <img
                                  src={user?.photoURL}
                                  className='w-8 h-8 rounded-full hover:cursor-pointer'
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