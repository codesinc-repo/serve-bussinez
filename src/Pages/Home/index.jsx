import React, { useState, useEffect, useCallback } from 'react';
import Header from "../../Components/Header";
import { IntroText } from "../../Components/IntroText";
import { ServicesBanner } from "../../Components/ServicesBanner";
import { AboutBanner } from "../../Components/AboutBanner";
import { DeliveringExcellence } from "../../Components/DeliveringExcellenceText";
import { StreamProcess } from "../../Components/StreamProcess";
import { WritingServices } from "../../Components/WritingServices";
import Testimonials from "../../Components/Testimonials";
import { Calculator } from "../../Components/Calculator";
import { GetStarted } from "../../Components/GetStarted";
import { FAQ } from "../../Components/FAQ";
import { Footer } from "../../Components/Footer";
import { ServicesCollapsed } from "../../Components/ServicesCollapsed";
import AOSInitializer from "../../AOSInitializer";
import ServicesAnimation from "../../services.json";
import Lottie from "lottie-react";
import MovingText from 'react-moving-text'
import Contact from '../../Components/Contact';
import home from "./2024-07-31-unlock-our-success-with-our-services.json";


export const Home = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (home) {
      setData(home);
      if (home.sections) {
        setSections(home.sections);
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

  // const [visibleSection, setVisibleSection] = useState(1);
  // const [isAnimating, setIsAnimating] = useState(false);

  // const handleNext = () => {
  //   setIsAnimating(true);
  //   setVisibleSection((prevSection) => (prevSection < 10 ? prevSection + 1 : prevSection));
  //   setIsAnimating(false);
  //   };

  //   const handleBack = () => {
  //     setIsAnimating(true);
  //     setVisibleSection((prevSection) => (prevSection > 1 ? prevSection - 1 : prevSection));
  //   setIsAnimating(false);
  // };

  // const debounce = (func, delay) => {
  //   let timeoutId;
  //   return function (...args) {
  //     if (timeoutId) {
  //       clearTimeout(timeoutId);
  //     }
  //     timeoutId = setTimeout(() => {
  //       func.apply(this, args);
  //     }, delay);
  //   };
  // };


  // const handleScroll = useCallback(debounce((event) => {
  //   if (isAnimating) return;
  //   const { deltaY } = event;
  //   if (deltaY > 0) {
  //     handleNext();
  //   } else if (deltaY < 0) {
  //     handleBack();
  //   }
  // }, 100), [isAnimating]);

  // useEffect(() => {
  //   window.addEventListener('wheel', handleScroll);
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, [handleScroll]);

  return (
    <>
      <Header />
      <main className='overflow-x-hidden'>
        <IntroText
          subtitle=""
          title={data.title}
          desc={data.description}
        />
        <div className="container-main ">
         <div className="container">
         <div className="row">
            <div className="col-lg-6">
              <div className="container-image overflow-hidden mt-3">
                <Lottie data-aos="zoom-in" data-aos-delay="10" data-aos-duration="1000" animationData={ServicesAnimation} />
              </div>
            </div>
            <div className="col-lg-6">
              {/* <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="text-center">Pick the best plan for you</h1> */}
              <div className="form-section d-flex align-items-center justify-content-center mt-4">
                <Calculator />
              </div>
            </div>
          </div>
         </div>


          <ServicesBanner
            subtitle="Reliable"
            title={sections[0].section_title}
            desc={sections[0].section_content}
            col_1_title={sections[1].section_title}
            col_1_des={sections[1].section_content}
            col_2_title={sections[2].section_title}
            col_2_desc={sections[2].section_content}
            col_3_title={sections[3].section_title}
            col_3_desc={sections[3].section_content}
            className="col-lg-4"
            imgUrl="/images/computer-1343393_1280.jpg"
          />

          <AboutBanner

            h1={sections[4].section_title}
            des1={sections[4].section_content}
            h2={sections[5].section_title}
            des2={sections[5].section_content}
            h3={sections[6].section_title}
            des3={sections[6].section_content}
            img="/images/computer-1343393_1280.jpg"
          />

          <DeliveringExcellence

            h1={sections[7].section_title}
            des1={sections[7].section_content}
            img={sections[7].section_image}
          />

          <StreamProcess />

          <Testimonials />

          <ServicesCollapsed />
          <GetStarted />
          <div className="project-showcase  container overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
            <div className="row p-sm-5 pt-5 pt-sm-0">
              <div className="col-lg-4 sm-mt-5">
                <div className="card">
                  <img className="card-img-top" src={sections[13].section_image} alt="Card cap" />
                </div>
              </div>
              <div className="col-lg-4 sm-mt-5">
                <div className="card">
                  <img className="card-img-top" src={sections[14].section_image} alt="Card cap" />
                </div>
              </div>
              <div className="col-lg-4 sm-mt-5">
                <div className="card">
                  <img className="card-img-top" src={sections[15].section_image} alt="Card cap" />
                </div>
              </div>
            </div>
          </div>

          <FAQ />

          <Contact />

          <Footer />

        </div>
      </main>
    </>
  );
};
