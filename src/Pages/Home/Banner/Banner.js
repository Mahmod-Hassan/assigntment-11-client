import React from "react";


const Banner = () => {
    return (
        <div className="md:flex justify-between items-center w-full gap-5 my-8 lg:bg-gradient-to-r from-[#b5b9bc] to-transparent">

            <div className="w-3/4 mx-auto md:w-1/2 text-center md:text-start mb-4">
                <h1 className="text-5xl lg:pl-8 font-bold mt-0">Hi! This is Mahmod. I am the owner of Classic Kitchen.</h1>
            </div>

            <div className="w-2/3 mx-auto md:w-1/2 bg-primary">
                <img src="https://img.freepik.com/free-photo/portrait-happy-male-chef-dressed-uniform_171337-5354.jpg?w=740&t=st=1668649985~exp=1668650585~hmac=3034a6ac6a1090de612f3dffd1904de1d4d21a52cee99d75cd55a713b18d26c7" alt="" />
            </div>

        </div>
    )
}
export default Banner;