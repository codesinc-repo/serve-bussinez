import { Footer } from "../../Components/Footer"
import Header from "../../Components/Header"
import React, { useState, useEffect, useCallback } from 'react';
import "./about.css"
import about from "./2024-08-01-unlock-your-potential.json"

export const About = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (about) {
      setData(about);
      if (about.sections) {
        setSections(about.sections);
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
              <div className="banner-section d-flex align-items-center justify-content-center text-center text-light">
                <div className="text-container">
                  <p data-aos="fade-up">Empowering</p>
                  <h1 data-aos="fade-up" data-aos-delay="300">{data.title}</h1>
                  <p data-aos="zoom-in" data-aos-delay="600">
                    {data.description}
                  </p>
                  <div className="button-section mt-3" data-aos="fade-up" data-aos-delay="900">
                    <button className="px-3 py-2 btn btn-outline-dark border-2 rounded-5 button1">
                      Learn more
                    </button>
                    <a href="SignUp ">
                      <button className="px-3 py-2 btn btn-outline-dark border-2 rounded-5 button2">
                        Sign Up
                      </button>
                    </a>
                  </div>
                </div>
              </div>
          {/* information section */}
              <div className="info-section p-5 ">
                <div className=" text-center">
                  <h2 data-aos="fade-up" >{sections[0].section_title}</h2>
                  <h2 data-aos="fade-up" data-aos-delay="300">{sections[1].section_title}</h2>
                  <p data-aos="fade-left" data-aos-delay="600" className="px-5">
                  {sections[1].section_content}
                  </p>
                </div>
              </div>
              {/* image with text */}
              <div className="container-fluid container-image-text overflow-hidden">
                <div className="row p-5 d-flex align-items-center justify-content-center ">
                  <div className="col-lg-6">
                    <h2 data-aos="slide-up" data-aos-delay="900">
                    {sections[2].section_title}
                    </h2>
                    <p data-aos="zoom-in" data-aos-delay="1200">
                    {sections[2].section_content}
                    </p>
                  </div>
                  <div className="col-lg-6 object-fit-cover">
                    <img data-aos="zoom-out" data-aos-delay="1500" className="sm-width" src={sections[2].section_image} alt="" height="370px" />
                  </div>
                </div>
              </div>
          {/* meet our team */}
              <div className="container-fluid container-team px-5">
                <div className="hiring-section">
                  <h1 data-aos="fade-up">{sections[3].section_title}</h1>
                  <p data-aos="slide-right" data-aos-delay="300">
                  {sections[3].section_content}
                  </p>
                  <button data-aos="zoom-in" data-aos-delay="600" className="px-3 py-2 btn btn-outline-dark border-2 rounded-5">
                    Open Position
                  </button>
                </div>
              </div>
              <Footer />
      </main>
    </>
  )
}