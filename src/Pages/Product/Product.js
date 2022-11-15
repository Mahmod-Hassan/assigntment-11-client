import React from 'react';

const Product = ({ product }) => {
    const { product_name, img, price, description } = product;
    return (
        <div className="card bg-base-300 shadow-md">
            <img src={img} alt="fruits-img"
                className="h-72"
            />
            <div className="card-body">
                <h2 className="text-2xl font-bold">{product_name}</h2>
                <>{description.length > 100 ?
                    <p className="text-gray-500">{description.slice(0, 100) + " ..."}</p>
                    :
                    <p className="text-lime-600">{description}</p>
                }</>
                <div className="flex">
                    <p className="text-xl font-semibold text-purple-500">{price}$</p> <p className="text-xl font-semibold text-purple-500 line-through">400$</p>
                </div>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;