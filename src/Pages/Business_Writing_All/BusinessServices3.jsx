import { BlogsCards } from "../../Components/BlogsCards";
import { CardsCarousel } from "../../Components/CardsCarousel";
import { FAQ } from "../../Components/FAQ";
import  FeedBackModal  from "../../Components/FeedbackModal";
import { Footer } from "../../Components/Footer";
import Header from "../../Components/Header";
import { ServicesBanner } from "../../Components/ServicesBanner";
import { ServicesImageBanner } from "../../Components/ServicesImageBanner";
import Testimonials from "../../Components/Testimonials";
import React, { useState, useEffect, useCallback } from 'react';


export const BusinessServices3 = () => {

  return (
    <>

      <main style={{ position: 'relative' }}>


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
            <h2>Business Writing Services</h2>
          </div>
        </div>
        <ServicesBanner
          subtitle=""
          title="Professional Case Study Services"
          desc="We offer a wide range of writing services including case studies tailored to meet your business needs. Our team of expert writers is dedicated to delivering high-quality case studies that align with your specific requirements and objectives."
          className="col-lg-4"
          col_1_title="Custom Case Studies"
          col_1_des="Get professionally written case studies tailored to your specific requirements and industry standards."
          col_2_title="Research and Analysis"
          col_2_desc="Receive comprehensive research and analysis reports to support your case study development and strategy."
          col_3_title="Data Visualization"
          col_3_desc="Access meticulously visualized data to strengthen your case studies and effectively communicate insights."
          imgUrl="/images/CaseStudy.jpg"
        />


        {/* grant proposals */}

        <div className="container-services p-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="/images/Social Media content.jpg "
                alt="Image"
                width="580px"
                data-aos="zoom-in"
              />
            </div>
            <div className="col-lg-6">
              {/* <p>Reliable</p> */}
              <h3 data-aos="fade-up" data-aos-delay="300">Professional Social Media Content Services</h3>
              <p data-aos="fade-left" data-aos-delay="600">
              We offer a wide range of writing services including social media content tailored to meet your business needs. Our team of expert writers is dedicated to delivering high-quality social media content that aligns with your specific requirements and objectives.
              </p>
              <div className="row">
                <div className="col-lg-4" data-aos="zoom-out" data-aos-delay="900">
                <h5>Custom Social Media Content</h5>
                  <p>
                  Get professionally crafted social media content tailored to your specific requirements and industry standards.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-out" data-aos-delay="1200">
                <h5>Engagement Strategies</h5>
                  <p>
                  Receive strategies to enhance engagement and interaction with your audience effectively.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-out" data-aos-delay="1500">
                  <h5>Visual Assets</h5>
                  <p>
                  Access meticulously designed visual /../assets to enhance your social media presence and attract followers' attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Annual Reports */}

        <ServicesBanner
          subtitle=""
          title="Professional Training Manual Services"
          desc="We offer a wide range of writing services including training manuals tailored to meet your educational needs. Our team of expert writers is dedicated to delivering high-quality training manuals that effectively educate your audience and convey information clearly."
          className="col-lg-4"
          col_1_title="Custom Training Manuals "
          col_1_des="Get professionally crafted training manuals tailored to your specific requirements and target audience."
          col_2_title="Content Development"
          col_2_desc="Receive comprehensive content development services to ensure your training manuals cover all necessary topics effectively."
          col_3_title="Visual Aids"
          col_3_desc=" Access meticulously designed visual aids to enhance understanding and retention of information in your training manuals."
          imgUrl="/images/Training Manuals.jpg"
        />

<div className="container-services p-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="/images/Executive Speeches.jpg"
                alt="Image"
                width="580px"
                data-aos="zoom-in"
              />
            </div>
            <div className="col-lg-6">
              {/* <p>Reliable</p> */}
              <h3 data-aos="fade-up" data-aos-delay="300">
              Professional Executive Speech Services</h3>
              <p data-aos="fade-left" data-aos-delay="600">
              We offer a wide range of writing services including executive speeches tailored to meet your communication needs. Our team of expert writers is dedicated to delivering high-quality executive speeches that effectively convey your message and resonate with your audience.
              </p>
              <div className="row">
                <div className="col-lg-4" data-aos="zoom-out" data-aos-delay="900">
                  <h5>Custom Executive Speeches</h5>
                  <p>
                  Get professionally crafted executive speeches tailored to your specific requirements and target audience.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-out" data-aos-delay="1200">
                  <h5>Speech Development</h5>
                  <p>
                  Receive comprehensive speech development services to ensure your executive speeches are engaging and impactful.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-out" data-aos-delay="1500">
                  <h5>Delivery Coaching</h5>
                  <p>
                  Access coaching sessions to enhance your delivery skills and effectively deliver your executive speeches with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Streamlined Content Solution */}

        <div className="content-solution">
          <div className="container text-center my-4">
            <h3 data-aos="fade-up" data-aos-duration="1000" className="mb-4 ">Streamlined Content Solution</h3>
            <div className="row">
              <div className="col-lg-4 text-start column sm-mt-5" data-aos="zoom-out" data-aos-delay="300">
                <div className="card text-start border-none">
                  <div className="card-body">
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                    <h4 >Scalability</h4>
                    <p>
                      Our managed service was designed to grow with you. No
                      matter how much content you need, industry-leading quality
                      is always the primary focus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-start column sm-mt-5" data-aos="zoom-out" data-aos-delay="600">
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
              <div className="col-lg-4 text-start column sm-mt-5" data-aos="zoom-out" data-aos-delay="900">
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
            <h3>Unlock Your Writing Potential</h3>
            <p>
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
