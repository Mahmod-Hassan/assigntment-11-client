import React from "react";

const Banner = () => {
    return (
        <div className="h-screen bg-[url('https://i.ibb.co/xLzDXc7/banner-Image.jpg')] bg-cover bg-no-repeat mx-auto -mx-20 flex justify-center items-center">
            <div className="grid items-center">
            <h1 className="text-gray-200 text-5xl text-center">Welcome To Tasty Food</h1>
            <p className="text-xl text-gray-300 text-center my-4">We Provide healthy and freash food of our clients</p>
            <button className="w-40 py-2 bg-lime-400 rounded font-medium mx-auto">Order Now</button>
            </div>
        </div>
    )
}
export default Banner;