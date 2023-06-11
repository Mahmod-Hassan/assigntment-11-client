import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Loader/Loader';
import Service from '../../Service/Service';

const LatestMenu = () => {
    const { data: services = [], isLoading } = useQuery({
        queryKey: ['service-limit'],
        queryFn: async () => {
            const res = await fetch('https://assigntment-11-server.vercel.app/service-limit');
            const data = await res.json();
            return data;
        }
    })
if(isLoading){
    return <Loader></Loader>
}
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>Latest Menu</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:p-0 my-10">
                {
                    services.map(service => <Service
                        key={service?._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
       
    )
}
export default LatestMenu;