import { Footer } from "../../Components/Footer"
import Header from "../../Components/Header"
import { Team } from '../../Components/Team';
import Testimonials from '../../Components/Testimonials';
import "./ClassOfServe.css";
import ClassofServeData from "./2024-07-29-striving-for-quality-service-and-100-customer-satisfaction.json";
import { React, useEffect, useState } from "react";

export const ClassofServe = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        if (ClassofServeData) {
            setData(ClassofServeData);
            if (ClassofServeData.sections) {
                setSections(ClassofServeData.sections);
            } else {
                setError(new Error('Sections data not found'));
            }
        } else {
            setError(new Error('Data not found'));
        }
    }, []);


    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    console.log("the data is ", data);

    return (
        <>
            <main style={{ position: 'relative' }}>
                <Header />
                <div className="banner-section d-flex align-items-center">
                    <div className="container text-center text-light">
                        <h2 data-aos="fade-up" data-aos-duration="1000">{data.title ? data.title : "123"}</h2>
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            {data.description}
                        </p>
                    </div>
                </div>
                {/* cards section */}
                <div className="cards container text-center mt-4">
                    <h3 data-aos="fade-up" data-aos-duration="1000" className="mb-3">{sections[0].section_title}</h3>
                    <p data-aos="fade-up" data-aos-duration="1000">
                        {sections[0].section_content}
                    </p>
                    <div className="row px-md-5 g-0 mt-4 px-0">
                        {/* card 01 */}
                        <div className="col-lg-3 overflow-hidden" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="card rounded-4 mt-2" >
                                <div className="card-body">
                                    <div className="card-image mt-2">
                                        <i className="fa-solid fa-briefcase" />
                                        <i className="fa-solid fa-circle-chevron-right" />
                                    </div>
                                    <div className="text-section mt-3">
                                        <h5 className="card-title text-light">{sections[1].section_title}</h5>
                                        <p className="card-subtitle text-muted">
                                            {sections[1].section_content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 02 */}
                        <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                            <div className="card rounded-4 mt-2" >
                                <div className="card-body">
                                    <div className="card-image mt-2">
                                        <i className="fa-solid fa-pen-fancy" />
                                        <i className="fa-solid fa-circle-chevron-right" />
                                    </div>
                                    <div className="text-section mt-3">
                                        <h5 className="card-title text-light">{sections[2].section_title}</h5>
                                        <p className="card-subtitle text-muted">
                                            {sections[2].section_content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 03 */}
                        <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                            <div className="card rounded-4 mt-2" >
                                <div className="card-body">
                                    <div className="card-image mt-2">
                                        <i className="fa-solid fa-book" />
                                        <i className="fa-solid fa-circle-chevron-right" />
                                    </div>
                                    <div className="text-section mt-3">
                                        <h5 className="card-title text-light">{sections[4].section_title}</h5>
                                        <p className="card-subtitle text-muted">
                                            {sections[4].section_content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 04 */}
                        <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                            <div className="card rounded-4 mt-2" >
                                <div className="card-body">
                                    <div className="card-image mt-2">
                                        <i className="fa-solid fa-file-pen" />
                                        <i className="fa-solid fa-circle-chevron-right" />
                                    </div>
                                    <div className="text-section mt-3">
                                        <h5 className="card-title text-light">{sections[5].section_title}</h5>
                                        <p className="card-subtitle text-muted">
                                            {sections[5].section_content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Offer */}
                <div className="offer-section container-gap" data-aos="fade-up" data-aos-duration="500">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>{sections[5].section_title}</h3>
                                <p>
                                    <i className="fa-solid fa-circle-check" /> {sections[6].section_content}
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" />{sections[7].section_title}
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" />{sections[7].section_content}
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" /> {sections[8].section_title}
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" />{sections[8].section_content}
                                </p>
                                <p>
                                    <i className="fa-solid fa-circle-check" />{sections[8].section_content}
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src={sections[5].section_image}
                                    alt="Our Guarantees"
                                    height="450px"
                                    className='sm-width'
                                    data-aos="fade-left"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                src={sections[8].section_image}
                                alt="Our Services"
                                height="350px"
                                data-aos="fade-right"
                                className='sm-width'
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3 data-aos="fade-left" data-aos-duration="500">{sections[8].section_title}</h3>
                            <p data-aos="fade-left" data-aos-duration="500">
                                {sections[8].section_content}
                            </p>
                            <div className="row">
                                <div className="col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
                                    <div className="image">
                                        <img
                                            src="/images/ExcusiveWorkload.png"
                                            alt="Subject Experts"
                                            height="30px"
                                            style={{ width: "30px" }}
                                        />
                                    </div>
                                    <div className="text-section px-1">
                                        <h6>{sections[9].section_title}</h6>
                                        <p>
                                            {sections[9].section_content}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                                    <div className="image">
                                        <img
                                            src="/images/LackofSkills.png"
                                            alt="Competitive Rates"
                                            height="30px"
                                            style={{ width: "30px" }}
                                        />
                                    </div>
                                    <div className="text-section px-1">
                                        <h6>{sections[10].section_title}</h6>
                                        <p>
                                            {sections[10].section_content}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                                    <div className="image">
                                        <img
                                            src="/images/DeadlinePressure.png"
                                            alt="Meet Deadlines"
                                            height="30px"
                                            style={{ width: "30px" }}
                                        />
                                    </div>
                                    <div className="text-section px-1">
                                        <h6>{sections[11].section_title}</h6>
                                        <p>
                                            {sections[11].section_content}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
                                    <div className="image">
                                        <img
                                            src="/images/WantHighGrades.png"
                                            alt="Original Papers"
                                            height="30px"
                                            style={{ width: "30px" }}
                                        />
                                    </div>
                                    <div className="text-section px-1">
                                        <h6>{sections[12].section_title}</h6>
                                        <p>
                                            {sections[12].section_content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counter */}
                <div className="container-counter container-gap container">
                    <div className="row text-center py-5 text-light" style={{ width: "100%" }} data-aos="fade-up" data-aos-duration="500">
                        <div className="col-lg-3">
                            <h1>20K+</h1>
                            <p>Orders Completed</p>
                        </div>
                        <div className="col-lg-3">
                            <h1>100</h1>
                            <p>Writers Online</p>
                        </div>
                        <div className="col-lg-3">
                            <h1>4.8</h1>
                            <p>Avg. Customer Rating</p>
                        </div>
                        <div className="col-lg-3">
                            <h1>4.8</h1>
                            <p>Avg. Writer Rating</p>
                        </div>
                    </div>
                </div>
                {/* meet our team */}
                <Team />
                <div className="container px-0 px-md-5 ">
                    <Testimonials />
                </div>
                {/* hired */}
                <div className="container">
                    <div className="container-hired mx-md-5 mx-auto  rounded-4 mb-5 pb-4 pb-md-0">
                        <div className="row overflow-hidden">
                            <div className="col-12 col-md-8  d-flex justify-content-center align-items-start text-light flex-column px-5">
                                <h2 data-aos="fade-up" data-aos-duration="500">Never Hired a Professional Online?</h2>
                                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                                    A recent surveys suggests that at least 76% students acquire
                                    professional help online. So, give it your first try. We promise not
                                    to disappoint you at all.
                                </p>
                                <a data-aos="fade-up" data-aos-delay="600" data-aos-duration="500" href="contactUs">
                                    <button className="px-3 py-2 rounded-3">
                                        <i className="fa-solid fa-box" /> Order Now
                                    </button>
                                </a>
                            </div>
                            <div className="col-12 col-md-4 d-none d-md-block" data-aos="zoom-in">
                                <img src="/images/hired.png" className='sm-width' alt="" height="350px" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main >


        </>
    )
}
