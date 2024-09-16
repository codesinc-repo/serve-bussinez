import { FAQ } from "../../Components/FAQ";
import { Footer } from "../../Components/Footer";
import Header from "../../Components/Header";
import React, { useState, useEffect, useCallback } from 'react';
import "./sample.css"
import sample from "./2024-07-29-welcome-to-our-sample-page.json";
export const Sample = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (sample) {
      setData(sample);
      if (sample.sections) {
        setSections(sample.sections);
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
        <Header />
      <main className="container" style={{ position: 'relative' }}>
        <div className="sample-section d-flex align-items-center justify-content-center text-center text-light">
          <div className="text-container pt-0">
            <p data-aos="fade-up" data-aos-duration="700">Empowering</p>
            <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">{data.title}</h1>
            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="1000">
              {data.description}
            </p>
            <div className="button-section mt-3">
              <button data-aos="fade-right" data-aos-duration="700" className="px-3 py-2 btn btn-outline-dark border-2 rounded-5 button1">
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
        {/* select info */}
        <div className="row">
          <div className="col-lg-4 select_option" data-aos="fade-up" data-aos-duration="700" data-aos-delay="1000">
            <div className="mb-3 catgeroy mt-4">
              {/* <label for="" class="form-label">City</label> */}
              <select className="form-select form-select-lg" name="" id="">
                <option value={1}>Choose the Academic Paper type</option>
                <option value={2}>Assignment</option>
                <option value={3}>Business Plan</option>
                <option value={4}>Case Study</option>
                <option value={5}>Cource Work</option>
                <option value={6}>Dissertation</option>
                <option value={7}>Essay</option>
              </select>
            </div>
          </div>
          <div className="col-lg-8 select_option_2" data-aos="fade-up" data-aos-duration="700">
            <div className="input-group mb-3 mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn bg-primary rounded-0 text-light"
                  type="button"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="row" >
            <div className="col-lg-4" data-aos="slide-left" data-aos-duration="700" data-aos-delay="500">
              <div className="row d-flex flex-column">
                <div className="">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">A</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Accounting </span>
                        <span> 104 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">B</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Business </span>
                        <span> 989 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Business Environment </span>
                        <span> 700 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Business Law </span>
                        <span> 12 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">C</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Case Study </span>
                        <span> 104 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Communication </span>
                        <span> 3 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">E</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Education </span>
                        <span> 23 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Engineering </span>
                        <span> 3 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Economics </span>
                        <span> 45 </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* second card */}
            <div className="col-lg-4" data-aos="slide-left" data-aos-duration="700" data-aos-delay="1000">
              <div className="row d-flex flex-column">
                <div className="">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">F</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Finance </span>
                        <span> 21 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Food </span>
                        <span> 19 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">G</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> General Studies </span>
                        <span> 989 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">H</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Health </span>
                        <span> 460 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Health &amp; Social Care </span>
                        <span> 3 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Human Resource Management </span>
                        <span> 81 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Hospitality </span>
                        <span> 567 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">I</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Information System </span>
                        <span> 321 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Information Technology </span>
                        <span> 108 </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Third card  */}
            <div className="col-lg-4" data-aos="slide-left" data-aos-delay="1500">
              <div className="row d-flex flex-column">
                <div className="">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">N</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Nursing </span>
                        <span> 435 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">P</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Physical Eduction </span>
                        <span> 1 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Planning </span>
                        <span> 19 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Politics </span>
                        <span> 43 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">R</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Religion </span>
                        <span> 539 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Research Methodolgy </span>
                        <span> 190 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card text-start">
                    <div className="card-body">
                      <h4 className="card-title">S</h4>
                      <p className="card-text d-flex justify-content-between">
                        <span> Sciences </span>
                        <span> 321 </span>
                      </p>
                      <p className="card-text d-flex justify-content-between">
                        <span> Social Policy </span>
                        <span> 108 </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 main_content_text">
            <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">{sections[0].section_title}</h2>
            <p data-aos="slide-right" data-aos-duration="700" data-aos-delay="800">
            {sections[0].section_content}

            </p>
            <p data-aos="slide-right" data-aos-duration="700" data-aos-delay="800">
            {sections[1].section_title}
            </p>
            <p data-aos="slide-right" data-aos-duration="700" data-aos-delay="800">
            {sections[1].section_content}
            </p>
            <p />
            <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            {sections[2].section_title}
            </h2>
            <p data-aos="slide-right" data-aos-duration="700" data-aos-delay="800">
            {sections[2].section_content}
            </p>
            <ul>
              <p data-aos="slide-right" data-aos-duration="700" data-aos-delay="800">
              {sections[3].section_title}
              </p>
            </ul>
            <ul>
              <p data-aos="slide-right" data-aos-duration="700" data-aos-delay="800">
              {sections[3].section_content}
              </p>
            </ul>
            <p data-aos="slide-right" data-aos-duration="700" data-aos-delay="1000">
            {sections[4].section_content}
            </p>
          </div>
        </div>
        {/* testimonial section */}
        <div className="testimonial-section d-flex align-item-center justify-content-center">
          <div className="content-wrapper">
            <h1>Our Reviews</h1>
            <div className="blue-line" />
            <div className="wrapper-for-arrows">
              <div style={{ opacity: 0 }} className="chicken" />
              <div id="reviewWrap" className="review-wrap">
                <div id="imgDiv" className="" />
                <div id="personName" />
                <div id="profession" />
                <div id="description" />
              </div>
              <div id="surpriseMeBtn" className="surprise-me-btn">
                Surprise me
              </div>
              <div className="left-arrow-wrap arrow-wrap">
                <div className="arrow" id="leftArrow" />
              </div>
              <div className="right-arrow-wrap arrow-wrap">
                <div className="arrow" id="rightArrow" />
              </div>
            </div>
          </div>
        </div>
        {/* faqs */}
        <FAQ />
      </main>
        <Footer />
    </>
  );
};
