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


export const BusinessServices2 = () => {

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
          title="Professional Press Release Services"
          desc="We offer a wide range of writing services including business plans tailored to meet your business needs. Our team of expert writers is dedicated to delivering high-quality business plans that align with your specific requirements and objectives."
          className="col-lg-4"
          col_1_title="Custom Press Releases"
          col_1_des="Get professionally written business plans tailored to your specific requirements and industry standards."
          col_2_title="Market Research Terminology"
          col_2_desc="Receive comprehensive market research reports to support your business planning and strategy."
          col_3_title="Financial Projections"
          col_3_desc="Access meticulously researched financial projections to strengthen your business plans and attract potential investors."
          imgUrl="/images/pressReleases.jpg"
        />


        {/* grant proposals */}

        <div className="container-services p-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="/images/Newsletters.jpg  "
                alt="Image"
                width="580px"
                data-aos="zoom-in"
              />
            </div>
            <div className="col-lg-6">
              {/* <p>Reliable</p> */}
              <h3 data-aos="fade-up" data-aos-delay="300">Professional Newsletter Services</h3>
              <p data-aos="fade-left" data-aos-delay="600">
                We offer a wide range of writing services including newsletters tailored to meet your business needs. Our team of expert writers is dedicated to delivering high-quality newsletters that align with your specific requirements and objectives.
              </p>
              <div className="row">
                <div className="col-lg-4" data-aos="zoom-out" data-aos-delay="900">
                  <h5>Custom Newsletters</h5>
                  <p>
                    Get professionally written newsletters tailored to your specific requirements and industry standards.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-out" data-aos-delay="1200">
                  <h5>Content Curation</h5>
                  <p>
                    Receive curated content to support your newsletter planning and engage your audience effectively.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-out" data-aos-delay="1500">
                  <h5>Design and Layout</h5>
                  <p>
                    Access meticulously designed layouts to enhance your newsletters and attract readers' attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Annual Reports */}

        <ServicesBanner
          subtitle=""
          title="Professional Website Content  Services"
          desc="We offer a wide range of writing services including Website Content  tailored to meet your business needs. Our team of expert writers is dedicated to delivering high-quality business plans that align with your specific requirements and objectives."
          className="col-lg-4"
          col_1_title="Custom Website Content"
          col_1_des="Get professionally written website content tailored to your specific requirements and target audience."
          col_2_title="SEO Optimization"
          col_2_desc="Receive comprehensive SEO optimization services to ensure maximum visibility of your website content."
          col_3_title="Editing and Publishing"
          col_3_desc=" Access meticulously edited website content and publishing services to enhance your online presence effectively."
          imgUrl="/images/WebsiteContent.jpg"
        />


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
