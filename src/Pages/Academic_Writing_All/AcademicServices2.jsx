import React, { useState, useEffect } from "react";
import { BlogsCards } from "../../Components/BlogsCards";
import { CardsCarousel } from "../../Components/CardsCarousel";
import { FAQ } from "../../Components/FAQ";
import FeedBackModal from "../../Components/FeedbackModal";
import { Footer } from "../../Components/Footer";
import Header from "../../Components/Header";
import { ServicesBanner } from "../../Components/ServicesBanner";
import { ServicesImageBanner } from "../../Components/ServicesImageBanner";
import Testimonials from "../../Components/Testimonials";
import AcademicServices from "./2024-08-01-academic-writing-service-2.json"

export const AcademicServices2 = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (AcademicServices) {
      setData(AcademicServices);
      if (AcademicServices.sections) {
        setSections(AcademicServices.sections);
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
      {/* <ToastContainer /> */}
      <main style={{ position: 'relative' }}>
        <Header />
        <ServicesImageBanner
          subtitle="Quality"
          title="Academic Writing"
          desc1="When your audience needs engaging and informative content, you need to ensure your writing ensure their standars."
          desc2="Our academic writers excel at producing content that meets the highest scholarly criteria, akin to top-tier academic journals and publications."
          bgImgUrl="/images/content-web1.jpg"
        />


        {/* Sample Business Articles*/}

        <div className="info-section overflow-hidden">
          <div className="text-section text-center my-5 ">
            <h2 data-aos="fade-up">Academic Writing Services</h2>
          </div>
        </div>
        <ServicesBanner
          subtitle=""
          title="Professional Dissertation Writing Services"
          desc="We offer a wide range of writing services including essays tailored to meet your academic needs. Our team of expert writers is dedicated to delivering high-quality essays that align with your specific requirements and academic standards."
          className="col-lg-4"
          col_1_title="Custom Dissertations"
          col_1_des="Get professionally written essays tailored to your specific requirements and audience preferences."
          col_2_title="Research Support"
          col_2_desc="Receive comprehensive research support to enhance your essay writing and academic performance."
          col_3_title="Editing and Proofreading"
          col_3_desc="Access meticulous editing and proofreading services to refine your essays and ensure academic excellence."
          imgUrl="/images/academic2.jpg"
        />
        {/* grant proposals */}
        <div className="container-services p-5">
          <div className="row">
            <div className="col-lg-6">
              <img data-aos="zoom-out" src="/images/academic10.jpg" alt="Professional Research Paper Services" width="580px" />
            </div>
            <div className="col-lg-6">
              {/* <p>Reliable</p> */}
              <h3 data-aos="fade-up">Professional Case Study Services</h3>
              <p data-aos="slide-left" data-aos-delay="300" data-aos-duration="1000">
                We offer a wide range of writing services including research
                papers tailored to meet your academic needs. Our team of expert
                writers is dedicated to delivering high-quality research papers
                that align with your specific requirements and academic
                standards.
              </p>
              <div className="row">
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                  <h5 >Custom Case Studies</h5>
                  <p>
                    Get professionally written research papers tailored to your
                    specific requirements and academic standards.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="600">
                  <h5>Data Collection</h5>
                  <p>
                    Receive comprehensive literature review reports to support
                    your research paper and demonstrate the existing body of
                    knowledge.
                  </p>
                </div>
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="900">
                  <h5>Analysis and Interpretation</h5>
                  <p>
                    Access meticulously conducted data analysis to strengthen
                    your research papers and contribute valuable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Annual Reports */}
        <ServicesBanner
          title="Professional Term Paper Services"
          desc="We offer a wide range of writing services including thesis writing tailored to meet your informational needs. Our team of expert writers is dedicated to delivering high-quality white papers that provide valuable insights and align with your specific objectives."
          className="col-lg-4"
          col_1_title="Custom Term Papers"
          col_1_des="Get professionally written theses tailored to your specific requirements and academic standards."
          col_2_title="Topic Research"
          col_2_desc="Receive comprehensive research methodology support to strengthen your thesis and ensure academic rigor."
          col_3_title="Writing and Formatting"
          col_3_desc="Access meticulously conducted statistical analysis to enhance the credibility and validity of your thesis."
          imgUrl="/images/academic4.jpg"
        />
        {/* Streamlined Content Solution */}
        <div className="content-solution">
          <div className="container text-center">
            <h3 data-aos="fade-up">Streamlined Content Solution</h3>
            <div className="row">
              <div className="col-lg-4 text-start column sm-mt-5" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
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
              <div className="col-lg-4 text-start column sm-mt-5" data-aos="zoom-out" data-aos-delay="600" data-aos-duration="1000">
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
              <div className="col-lg-4 text-start column sm-mt-5" data-aos="zoom-out" data-aos-delay="900" data-aos-duration="1000">
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
            <h3 data-aos="zoom-in">Unlock Your Writing Potential</h3>
            <p data-aos="fade-left" data-aos-delay="300">
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
