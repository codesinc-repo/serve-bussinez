import React from "react";
import img1 from "../../images/pricingmeet.jpg";
import { Link } from "react-router-dom";

const PricingMeet = () => {
    return (

        <>
            <div className="container d-flex flex-column mb-5 flex-md-row align-items-center justify-content-between p-4 bg-white rounded " data-aos="fade-left">
                <div className="col-md-5">
                    <h1 className=" fw-bold text-primary mb-2">
                        Flexible Pricing to meet your writing needs
                    </h1>
                    <h5 className="text-muted mb-4">
                        We provide you budget-friendly options so that you can make your business
                        a success within a reasonable budget.
                    </h5>
                    <Link to="/Home">
                        <button className="btn btn-secondary rounded-5 ">Order Now</button></Link>
                </div>
                <div className="col-md-7 d-flex justify-content-center" data-aos="fade-left"  >
                    <img
                        aria-hidden="true"
                        alt="illustration of a person thinking about budget"
                        src={img1}
                        className="img-fluid"
                    />
                </div>
            </div>

        </>
    );

}
export default PricingMeet;