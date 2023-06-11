import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Loader from '../../Loader/Loader';
import Service from '../Service/Service';


const Services = () => {
    const { data: services = [],isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('https://assigntment-11-server.vercel.app/services');
            const data = await res.json();
            return data;
        }
    })
        if(isLoading){
            return <Loader></Loader>
        }
    return (
        <>
            <Helmet><title>Services - Classic Kitchen</title></Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 lg:p-0 my-10">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            
        </>

    );
};

export default Services;