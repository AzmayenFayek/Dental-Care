import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import "./About.css";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="extra-margin-bottom " >
                <div className="container">
                    <h1 className="aboutUsText">About Us</h1>
                    <div className="quote-section">
                        <div className="quote-container">

                            <p className="title-name quote-item" fontWeight="400">
                                Learning has the power to transform our world
                                from illness to health,
                                from poverty to prosperity,
                                from conflict to peace."
                            </p>
                        </div>

                        <div className="quote-container">
                            <p className="title-name quote-item" fontWeight="400">
                                No matter who we are or where we are,
                                learning empowers us to change and grow
                                and redefine what’s possible.
                                That’s why access to the best learning is a right, not a privilege."
                            </p>
                        </div>
                        <div className="quote-container">
                            <p className="title-name quote-item" fontWeight="400">
                                And that’s why Coursera is here.
                                We partner with the best institutions
                                to bring the best learning
                                to every corner of the world."
                            </p>


                        </div>
                    </div>

                </div>
            </div>

            <div >
            </div>

        </div>
    );
};

export default About;