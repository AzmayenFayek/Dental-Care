import React, { useState } from "react";
import workApi from '../../Api/workApi';

const HowWeWork = () => {
    const [workData, setWorkData] = useState(workApi);
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How We Work</h1>
                    <div className="row">
                        {workData.map((curElem) => {
                            const { id, logo, title, info } = curElem;
                            return (
                                <>
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv" key={id}>
                                        <i class={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para w-100">{info}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowWeWork;