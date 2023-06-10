import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { service_name, price, description, _id, date } = service;
    return (
        <div className="card shadow-md">

            <PhotoProvider>
                <PhotoView src={service?.img}>
                    <img src={service?.img} alt="fruits-img"
                        className="h-72 m-2 rounded"
                    />
                </PhotoView>

            </PhotoProvider>

            <div className="card-body">
                <h2 className="text-2xl font-bold">{service_name}</h2>
                <>{description.length > 100 ?
                    <p className="text-gray-500">{description.slice(0, 100) + " ..."}</p>
                    :
                    <p className="text-lime-600">{description}</p>
                }</>
                <div className="flex">
                    <p className="text-xl font-semibold text-purple-500">Price : {price}$</p>
                    <p className="text-xl font-semibold text-purple-500">Date : {date}</p>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;