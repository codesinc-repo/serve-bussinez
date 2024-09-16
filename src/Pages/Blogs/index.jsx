import { BlogsCards } from "../../Components/BlogsCards";
import { FAQ } from "../../Components/FAQ";
import { Footer } from "../../Components/Footer";
import Header from "../../Components/Header";
import Testimonials from "../../Components/Testimonials";
import React, { useState, useEffect, useCallback } from 'react';
import blog from "./2024-07-29-explore-our-range-of-services.json"
import "./Blogs.css";

export const Blogs = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (blog) {
      setData(blog);
      if (blog.sections) {
        setSections(blog.sections);
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
        <div className="banner-section ">
          <div className="image-section px-0 px-md-5">
            <div className="col-lg-12 column1 text-light">
              <p data-aos="fade-up" data-aos-duration="700" >Quality</p>
              <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">{data.title}</h1>
              <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="1000">
               {data.description}
              </p>
              <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="1500">
                From academic essays to persuasive sales copy, we've got you
                covered.
              </p>
              <div className="button-section">
                <button data-aos="slide-right" data-aos-duration="700" data-aos-delay="800" className="text-light px-3 py-2 rounded-5 button1">
                  Learn More
                </button>
                <a href="/ContactUs">
                  <button data-aos="slide-left" data-aos-duration="700" data-aos-delay="800" className="text-light px-3 py-2 rounded-5 button2">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* information section */}
        <div className="info-section container overflow-hidden">
          <div className="text-section">
            <div className="row px-0 px-md-5">
              <div className="col-lg-12 px-2 px-md-5 mt-4 text-center">
                {/* <p>Quality</p> */}
                <h1 data-aos="fade-up" data-aos-duration="700">{sections[0].section_title}</h1>
                <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
                {sections[0].section_content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <BlogsCards />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};
