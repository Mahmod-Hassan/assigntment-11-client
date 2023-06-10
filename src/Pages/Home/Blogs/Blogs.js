import React from 'react';

const Blogs = () => {

    return (
        <section className="bg-white my-10">
        <div className="py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold capitalize lg:text-3xl">Blog Posts</h1>
            
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/7pqtWVC/biriyani.jpg" alt="" />
              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  How to cook Biriyani
                </a>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                  laudantium quia tempore delect
                </p>
                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
              </div>
            </div>
            <div>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://i.ibb.co/MPZvwFP/grill.jpg" alt="" />
              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                  How to make grill
                </a>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                  laudantium quia tempore delect
                </p>
                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Blogs;