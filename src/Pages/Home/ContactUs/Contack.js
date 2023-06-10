import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="bg-white">
        <div className="px-6 py-10">
          <div className="md:flex md:items-center md:-mx-10">
            <div className="md:w-1/2 md:mx-10">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl">Contact With Us</h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Ask us everything and we would love
                to hear from you
              </p>

              {/* contact form start */}
              <form className="mt-12">
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                    <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message" defaultValue={""} />
                </div>
                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
                 {/* contact form end */}

            </div>
            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <img className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-32 h-32" src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
              <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-center -mx-2">
                   <FaLocationArrow></FaLocationArrow>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                   Brahmanbaria, Sadar
                  </span>
                </p>
                <p className="flex items-center -mx-2">
                  <FaPhone></FaPhone>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(+880) 1314890047</span>
                </p>
                <p className="flex items-center -mx-2">
                  <FaEnvelope></FaEnvelope>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">mahmodhasan7788@gmail</span>
                </p>
              </div>
              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>
                
                {/* social media icons start*/}
                <div className="flex mt-4 -mx-1.5 ">
                <a className="text-2xl mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                  <FaFacebook></FaFacebook>
                  </a>
                  <a className="text-2xl mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                   <FaTwitter></FaTwitter>
                  </a>
                  <a className="text-2xl mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                  <FaInstagram></FaInstagram>
                  </a>
                  <a className="text-2xl mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                   <FaLinkedin></FaLinkedin>
                  </a>
                </div>
                {/* social media icons end*/}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Contact;