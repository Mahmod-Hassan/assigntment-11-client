import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Service from '../Service/Service';


const Services = () => {
    const { data: services = [] } = useQuery({
        queryKey: ['/services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 lg:p-0 my-10">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;