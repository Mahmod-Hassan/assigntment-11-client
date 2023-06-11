
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Discount from '../Discount/Discount';
import Drinks from '../Drinks/Drinks';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import LatestMenu from '../LatestMenu/LatestMenu';
import Menu from '../Menu/Menu';
import Resturant from '../Resturant/Resturant';
import Team from '../Team/Team';

const Home = () => {

    return (

        <div>
            <Helmet><title>Classic Kitchen</title></Helmet>
            <Banner></Banner>
            <Menu></Menu>
            <LatestMenu></LatestMenu>
            <Drinks></Drinks>
            <Features></Features>
            <Resturant></Resturant>
            <Gallery></Gallery>
            <Blogs></Blogs>
             <Team></Team>
            <Discount></Discount>
        </div>
    );
};

export default Home;