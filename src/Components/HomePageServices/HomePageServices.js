import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceApi from "../Api/ServiceApi.js"
import './HomePageServices.css'


const HomePageServices = () => {
    const [serviceData, setServiceData] = useState(ServiceApi);
    console.log(setServiceData);
    return (
        <>
            <section className="service-main-container mt-5">
                <div className="container service-container">
                    <h1 className="main-heading text-center font-weight-bold mt-5">
                        Our Services
                    </h1>

                    <div className="container-fluid mt-5 mb-5" >
                        {serviceData.map((curElem) => {

                            const { id, image, title, info } = curElem;
                            return (
                                <>
                                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv mb-5"
                                        key={id}>

                                        <img src={image} alt="" />
                                        <h2 className="sub-heading mt-3">{title}</h2>
                                        <p className="main-hero-para mt-3 me-5 ms-5"> {info}</p>
                                        <div className="read-more">
                                            <Link to="/readmore">
                                                <span class="fas fa-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )

                        })}

                    </div>

                </div>
            </section>
        </>
    );
};

export default HomePageServices;