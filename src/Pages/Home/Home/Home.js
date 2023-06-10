
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Service from '../../Service/Service';
import Banner from '../Banner/Banner';
import OurExpert from '../OurExpert/OurExpert';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    const { data: services = [] } = useQuery({
        queryKey: ['service-limit'],
        queryFn: async () => {
            const res = await fetch('https://assigntment-11-server.vercel.app/service-limit');
            const data = await res.json();
            return data;
        }
    })

    return (

        <div>
            <Helmet><title>Classic Kitchen</title></Helmet>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 lg:p-0 my-10">
                {
                    services.map(service => <Service
                        key={service?._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <WhyChooseUs></WhyChooseUs>
            <OurExpert></OurExpert>
        </div>
    );
};

export default Home;