import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import tastyFood from '../../../images/tastyfood.png';
const Footer = () => {
    return (

        <footer className="bg-gray-900">
        <div className="py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
              <img className="w-20 h-20" src={tastyFood} alt="" />
            <div className="flex flex-wrap justify-center my-6">
              <Link className="mx-4 text-sm  transition-colors duration-300 text-gray-300 hover:text-blue-400" to='/'>Home</Link>
              <Link className="mx-4 text-sm  transition-colors duration-300 text-gray-300 hover:text-blue-400" to='/'>Menu</Link>
              <Link className="mx-4 text-sm  transition-colors duration-300 text-gray-300 hover:text-blue-400" to='/'>Blogs</Link>
              <Link className="mx-4 text-sm  transition-colors duration-300 text-gray-300 hover:text-blue-400" to='/'>Gallery</Link>
              <Link className="mx-4 text-sm  transition-colors duration-300 text-gray-300 hover:text-blue-400" to='/'>Team</Link>
            </div>
            <div className="flex">
             <FaFacebook className='text-2xl mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-400 hover:cursor-pointer'></FaFacebook>
             <FaLinkedin className='text-2xl mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-400 hover:cursor-pointer'></FaLinkedin>
             <FaTwitter className='text-2xl mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-400 hover:cursor-pointer'></FaTwitter>
            </div>
          </div>
          <hr className="my-6 md:my-10 border-gray-700" />
            <p className="text-sm text-center text-gray-300">© Copyright 2021. All Rights Reserved.</p>

        </div>
      </footer>


    );
};

export default Footer;