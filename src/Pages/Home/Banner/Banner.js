import React from "react";


const Banner = () => {
    return (
        <div className="md:flex justify-between w-full gap-5 bg-gray-300">

            <div className="w-3/4 mx-auto md:w-1/2 text-amber-500 p-5 text-center md:text-start">
                <h1 className="text-6xl mt-20">You can order my delicious food from any where.</h1>
            </div>
            <div className="w-3/4 mx-auto md:w-1/2">
                <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
            </div>
        </div>
    )
}
export default Banner;