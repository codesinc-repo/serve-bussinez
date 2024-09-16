import React, { useState, useEffect } from 'react';
import { Footer } from "../../Components/Footer";
import Header from "../../Components/Header";
import "./HowItWorks.css"
import howtowork from "./2024-07-29-serve-biznes.json"

export const HowItWorks = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (howtowork) {
      setData(howtowork);
      if (howtowork.sections) {
        setSections(howtowork.sections);
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
        <div className="main-container text-light">
          <div className="text-container text-center d-flex justify-content-center align-items-center flex-column">
            <h1 data-aos="fade-up" data-aos-duration="500">{data.title}</h1>
            <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
              {data.description}
            </p>
          </div>
        </div>
        <div className="cards-section">
          <div className="row px-2 px-md-5 g-0">
            {/* card 01 */}
            <div className="col-lg-3 overflow-hidden" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="500">
              <div className="card rounded-4 mt-2" >
                <div className="card-body">
                  <div className="card-image mt-2">
                    <i className="fa-solid fa-box" />
                    <i className="fa-solid fa-circle-chevron-right" />
                  </div>
                  <div className="text-section mt-3">
                    <h5 className="card-title" >{sections[0].section_title}</h5>
                    <p className="card-subtitle text-muted">
                      {sections[0].section_content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 02 */}
            <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="500">
              <div className="card rounded-4 mt-2" >
                <div className="card-body">
                  <div className="card-image mt-2">
                    <i className="fa-solid fa-suitcase" />
                    <i className="fa-solid fa-circle-chevron-right" />
                  </div>
                  <div className="text-section mt-3">
                    <h5 className="card-title">{sections[1].section_title}</h5>
                    <p className="card-subtitle text-muted">
                      {sections[1].section_content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 03 */}
            <div className="col-lg-3" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="500">
              <div className="card rounded-4 mt-2" >
                <div className="card-body">
                  <div className="card-image mt-2">
                    <i className="fa-solid fa-map-location-dot" />
                    <i className="fa-solid fa-circle-chevron-right" />
                  </div>
                  <div className="text-section mt-3">
                    <h5 className="card-title">{sections[2].section_title}</h5>
                    <p className="card-subtitle text-muted">
                      {sections[2].section_content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card 04 */}
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="1800" data-aos-duration="500">
              <div className="card rounded-4 mt-2" >
                <div className="card-body">
                  <div className="card-image mt-2">
                    <i className="fa-solid fa-circle-dollar-to-slot" />
                    <i className="fa-solid fa-check" />
                  </div>
                  <div className="text-section mt-3">
                    <h5 className="card-title">{sections[3].section_title}</h5>
                    <p className="card-subtitle text-muted">
                      {sections[3].section_content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works? */}
          <div className="container-work overflow-hidden">
            <div className="text-center   mt-4">
              <h3 data-aos="fade-up" data-aos-duration="500">{sections[4].section_title}</h3>
            </div>
            <div className="row mx-2 mx-md-4">
              <div className="col-lg-6 d-flex align-items-center justify-content-center ">
                <img data-aos="zoom-in"className='w-75' data-aos-duration="500" src={sections[5].section_image} alt="" />
              </div>
              <div className="col-lg-6 p-0 p-md-5 d-flex align-items-start justify-content-center flex-column" data-aos="slide-left" data-aos-duration="700">
                <h1 className="text-secondary">01</h1>
                <h4>{sections[5].section_title}</h4>
                <p>
                  {sections[5].section_content}
                </p>
              </div>
            </div>
          </div>
        {/* Make a Deposit to Initiate the Order */}
        <div className="container-work overflow-hidden">
          <div className="row mx-2 mx-md-4">
            <div className="col-lg-6 p-0 p-md-5">
              <h1 data-aos="slide-right" data-aos-duration="700" className="text-secondary">02</h1>
              <h4 data-aos="slide-right" data-aos-duration="700">{sections[6].section_title}</h4>
              <p data-aos="fade-up" data-aos-duration="700">
                {sections[6].section_content}
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <img data-aos="zoom-in" src={sections[6].section_image} alt="" />
            </div>
          </div>
        </div>
        {/* Track Progress of Paper */}
        <div className="container-work overflow-hidden">
          <div className="row mx-2 mx-md-4">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <img data-aos="zoom-in" src={sections[7].section_image} alt="" />
            </div>
            <div className="col-lg-6 p-0 p-md-5">
              <h1 data-aos="slide-left" data-aos-duration="700" className="text-secondary">03</h1>
              <h4 data-aos="slide-left" data-aos-duration="700">{sections[7].section_title}</h4>
              <p data-aos="fade-up" data-aos-duration="700">
              {sections[7].section_content}
              </p>
            </div>
          </div>
        </div>
        {/* Get Your Paper & Ask for Revision */}
        <div className="container-work overflow-hidden">
          <div className="row mx-2 mx-md-4">
            <div className="col-lg-6 p-0 p-md-4">
              <h1 data-aos="slide-right" data-aos-duration="700" className="text-secondary">04</h1>
              <h4 data-aos="slide-right" data-aos-duration="700">{sections[8].section_title}</h4>
              <p data-aos="fade-up" data-aos-duration="700">
              {sections[8].section_content}
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <img data-aos="zoom-in" src={sections[8].section_image} alt="" />
            </div>
          </div>
        </div>
        {/* hired */}
        <div className="container-hired mx-2 mx-md-5 rounded-4 mb-5 pb-4">
          <div className="row overflow-hidden">
            <div className="col-12 col-md-8 d-flex justify-content-center align-items-start text-light flex-column px-5">
              <h2 data-aos="fade-up">Never Hired a Professional Online?</h2>
              <p data-aos="slide-right">
                A recent surveys suggests that at least 76% students acquire
                professional help online. So, give it your first try. We promise
                not to disappoint you at all.
              </p>
              <a href="/ContactUs">
                <button data-aos="fade-up" className="px-3 py-2 rounded-3">
                  <i className="fa-solid fa-box" /> Order Now
                </button>
              </a>
            </div>
            <div className="col-lg-4 d-none d-md-block">
              <img data-aos="zoom-in" className="sm-width" src="/images/hired.png" alt="" height="350px" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};
