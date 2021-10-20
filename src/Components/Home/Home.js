import React from 'react';
import Header from '../Header/Header';
import HowWeWork from '../HowWeWork';
import Navbar from './../../Shared/Navbar/Navbar';
import Footer from './../../Shared/Footer/Footer';
import HomePageServices from '../HomePageServices/HomePageServices';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <HowWeWork></HowWeWork>
            <HomePageServices></HomePageServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;