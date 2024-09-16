import React from "react";
import "./OurBenefit.css";
import img7 from "../../images/taka.jpg";
import img1 from "../../images/benefit _1.jpg";
import img2 from "../../images/benefit_2.jpg";
import img3 from "../../images/benefit_3.jpg";
import img4 from "../../images/benefit_4.jpg";
import img5 from "../../images/benefit_5.jpg";
import img6 from "../../images/benefit_6.jpg";

const OurBenefit = () => {
    return (
        <>
            <div className="container py-5">
                <h2 className="text-center text-primary mb-4">Our Benefits</h2>
                <div className="row g-4">
                    <div className="col-lg-6 d-flex flex-wrap" data-aos="fade-right">
                        <div className="col-6 col-md-4 col-lg-6 mb-4 text-center">
                            <div className="bg-white card_setting p-4 rounded-lg">
                                <img aria-hidden="true" alt="Proven Track Record" src={img1} className="img-fluid" />
                                <h4 className="h6 mt-2">Proven Track Record</h4>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-6 mb-4 text-center">
                            <div className="bg-white card_setting p-4 rounded-lg">
                                <img aria-hidden="true" alt="Results Oriented" src={img2} className="img-fluid" />
                                <h4 className="h6 mt-2">Results Oriented</h4>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-6 mb-4 text-center">
                            <div className="bg-white card_setting p-4 rounded-lg">
                                <img aria-hidden="true" alt="Custom Solutions" src={img3} className="img-fluid" />
                                <h4 className="h6 mt-2">Custom Solutions</h4>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-6 mb-4 text-center">
                            <div className="bg-white card_setting p-4 rounded-lg">
                                <img aria-hidden="true" alt="Budget Friendly" src={img4} className="img-fluid" />
                                <h4 className="h6 mt-2">Budget Friendly</h4>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-6 mb-4 text-center">
                            <div className="bg-white card_setting p-4 rounded-lg">
                                <img aria-hidden="true" alt="Authentic Service" src={img5} className="img-fluid" />
                                <h4 className="h6 mt-2">Authentic Service</h4>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-6 mb-4 text-center">
                            <div className="bg-white card_setting p-4 rounded-lg">
                                <img aria-hidden="true" alt="On Time" src={img6} className="img-fluid" />
                                <h4 className="h6 mt-2">On Time</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mt-4 text-center"   data-aos="fade-left">
                            <img aria-hidden="true" alt="Team Collaboration" className=" img-fluid" src={img7} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurBenefit;
