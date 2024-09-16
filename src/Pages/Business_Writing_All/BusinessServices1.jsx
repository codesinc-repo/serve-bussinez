import { BlogsCards } from "../../Components/BlogsCards";
import { CardsCarousel } from "../../Components/CardsCarousel";
import { FAQ } from "../../Components/FAQ";
import FeedBackModal  from "../../Components/FeedbackModal";
import { Footer } from "../../Components/Footer";
import { ServicesBanner } from "../../Components/ServicesBanner";
import { ServicesImageBanner } from "../../Components/ServicesImageBanner";
import Testimonials from "../../Components/Testimonials";
import React, { useState, useEffect, useCallback } from 'react';
import Header from "../../Components/Header";

export const BusinessServices1 = () => {
  // const [visibleSection, setVisibleSection] = useState(1);
  // const [isAnimating, setIsAnimating] = useState(false);

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

  // const handleNext = () => {
  //   setVisibleSection((prevSection) => (prevSection < 9 ? prevSection + 1 : prevSection));
  // };

  // const handleBack = () => {
  //   setVisibleSection((prevSection) => (prevSection > 1 ? prevSection - 1 : prevSection));
  // };
  return (
    <>
      <main style={{ position: 'relative' }}>
        {/* <div style={{position:'fixed', zIndex:'99',display:'grid'}}>
          <img onClick={handleBack} style={{cursor: 'pointer', height: '5vh', width: '5vh' }} src="/images/arrow-back.png" alt="Next" />
          <img onClick={handleNext} style={{ cursor: 'pointer', height: '5vh', width: '5vh',marginTop:'70vh' }} src="/images/arrow-next.png" alt="Back" />
        </div>
        <div> */}

        <Header />
        <ServicesImageBanner
          subtitle="Quality"
          title="Business Writers"
          desc1="When your audience is used to consuming advanced-level content, you need to ensure you're speaking their language."
          desc2="Our business writers know how to create content on par with the most thought-provoking and industry leading business industry publications."
          bgImgUrl="/images/Business.jpg"
        />


        {/* Sample Business Articles*/}

        <div className="info-section overflow-hidden">
          <div className="text-section text-center my-4">
            <h2 data-aos="fade-up" data-aos-duration="1000" >Business Writing Services</h2>
          </div>
        </div>
        <ServicesBanner
          subtitle=""
          title="Professional Business Plan Services"
          desc="We offer a wide range of writing services including business plans tailored to meet your business needs. Our team of expert writers is dedicated to delivering high-quality business plans that align with your specific requirements and objectives."
          className="col-lg-4"
          col_1_title="Custom Business Plans"
          col_1_des="Get professionally written business plans tailored to your specific requirements and industry standards."
          col_2_title="Market Research Terminology"
          col_2_desc="Receive comprehensive market research reports to support your business planning and strategy."
          col_3_title="Financial Projections"
          col_3_desc="Access meticulously researched financial projections to strengthen your business plans and attract potential investors."
          imgUrl="/images/Business plan 2.jpg"
        />


        {/* grant proposals */}
        <div className="container-services p-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                data-aos="zoom-out"
                src="/images/Business proposal1.jpg "
                alt="Image"
                width="580px"
              />
            </div>
            <div className="col-lg-6">
              {/* <p>Reliable</p> */}
              <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Professional Grant Proposal Services</h3>
              <p data-aos="slide-left" data-aos-delay="200" data-aos-duration="1000">
                We offer a wide range of writing services including grant
                proposals tailored to meet your funding needs. Our team of
                expert writers is dedicated to delivering high-quality grant
                proposals that align with your specific requirements and
                objectives.
              </p>
              <div className="row">
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                  <h5>Custom Grant Proposals</h5>
                  <p>
                    Get professionally written grant proposals tailored to your
                    specific requirements and funding guidelines.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000">
                  <h5>Needs Assessment</h5>
                  <p>
                    Receive comprehensive needs assessment reports to support
                    your grant proposal and demonstrate the necessity of
                    funding.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                  <h5>Budget Development</h5>
                  <p>
                    Access meticulously researched budget development to
                    strengthen your grant proposals and attract potential
                    funders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Annual Reports */}

        <ServicesBanner
          subtitle=""
          title="Professional Annual Report Services"
          desc="We offer a wide range of writing services including annual reports tailored to meet your business needs. Our team of expert writers is dedicated to delivering high-quality business plans that align with your specific requirements and objectives."
          className="col-lg-4"
          col_1_title="Custom Annual Reports"
          col_1_des="Get professionally craftes annual reports tailored to your specific requirements and industry standards."
          col_2_title="Data Analysis"
          col_2_desc="Receive comprehensive data analysis services to ensure
        accurate representation of your organization's performance
        in the annual report."
          col_3_title="Design and Presentation"
          col_3_desc=" Access meticulously designed annual reports and presentation
        services to effectively communicate your organization's
        achievements and goals."
          imgUrl="/images/Annual Reports.jpg"
        />

        {/* Streamlined Content Solution */}

        <div className="content-solution">
          <div className="container text-center my-4">
            <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="mb-4">Streamlined Content Solution</h3>
            <div className="row">
              <div className="col-lg-4 text-start column sm-mt-5" data-aos="slide-right" data-aos-delay="600" data-aos-duration="1000">
                <div className="card text-start border-none">
                  <div className="card-body">
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                    <h4>Scalability</h4>
                    <p>
                      Our managed service was designed to grow with you. No
                      matter how much content you need, industry-leading quality
                      is always the primary focus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-start column sm-mt-5" data-aos="slide-up" data-aos-delay="600" data-aos-duration="1000">
                <div className="card text-start">
                  <div className="card-body">
                    <i className="fa-solid fa-envelope" />
                    <h4>Deliverability</h4>
                    <p>
                      No project is too big for us to take on. Whenever you need
                      your content, we’ll be there to deliver it. We’ll work
                      within any timeframe to meet your needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-start column sm-mt-5" data-aos="slide-left" data-aos-delay="600" data-aos-duration="1000">
                <div className="card text-start">
                  <div className="card-body">
                    <i className="fa-regular fa-calendar" />
                    <h4>Consistency</h4>
                    <p>
                      We hand-select writers for your project based on industry
                      experience and project fit, so you can bank on a
                      consistent stream of high-quality content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info Section card */}
        <BlogsCards display="d-none" />



        {/* Feedback Section */}
        <FeedBackModal />

        {/* Carasoual */}

        <div className="row mx-auto">
          <div className="col-lg-12 text-center">
            <h3 data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Unlock Your Writing Potential</h3>
            <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
              Explore a range of writing guides and resources to enhance your
              skills.
            </p>
          </div>
        </div>
        <CardsCarousel />
        {/* testimonial section */}
        <Testimonials />
        {/* faqs */}
        <FAQ />
        <Footer />
      </main>
    </>
  );
};
