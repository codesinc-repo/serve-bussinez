import { BlogsCards } from "../../Components/BlogsCards";
import { CardsCarousel } from "../../Components/CardsCarousel";
import { FAQ } from "../../Components/FAQ";
import FeedBackModal from "../../Components/FeedbackModal";
import { Footer } from "../../Components/Footer";
import Header from "../../Components/Header";
import { ServicesBanner } from "../../Components/ServicesBanner";
import { ServicesImageBanner } from "../../Components/ServicesImageBanner";
import Testimonials from "../../Components/Testimonials";
import { useCallback, useEffect, useState } from "react";
import contentservice_2 from "./2024-08-01-content-writing-services-2.json"

export const ContentServices2 = () => {


  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (contentservice_2) {
      setData(contentservice_2);
      if (contentservice_2.sections) {
        setSections(contentservice_2.sections);
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
        <ServicesImageBanner
          subtitle="Quality"
          title="Content Writing"
          desc1="When your audience needs engaging and informative content, you need to ensure your writing captures their attention."
          desc2="Our content writers specialize in creating compelling and valuable content tailored to your audience's needs, ensuring maximum engagement and impact"
          bgImgUrl="/images/content-web1.jpg"
        />

        {/* Sample Business Articles
         */}
        <div className="info-section overflow-hidden">
          <div className="text-section text-center my-5">
            <h2>Content Writing Services</h2>
          </div>
        </div>

        <ServicesBanner
          subtitle=""
          title="Professional Social Media Posts Services"
          desc="We offer a wide range of writing services including social media posts tailored to meet your content needs. Our team of expert writers is dedicated to delivering high-quality social media content that engages your audience and aligns with your specific requirements."
          className="col-lg-4"
          col_1_title="Custom Social Media Posts"
          col_1_des="Get professionally written social media posts tailored to your specific requirements and audience preferences."
          col_2_title="Content Strategy"
          col_2_desc="Receive comprehensive content strategy support to enhance your social media presence and captivate your audience."
          col_3_title="Visual Design"
          col_3_desc="Access meticulous visual design services to create engaging social media posts and ensure visually appealing content."
          imgUrl="/images/content8.jpg"
        />

        {/* grant proposals */}
        <div className="container-services p-5">
          <div className="row">
            <div className="col-lg-6">
              <img src="/images/content6.jpg" alt="Image" width="580px" />
            </div>
            <div className="col-lg-6">
              {/* <p>Reliable</p> */}
              <h3>Professional Email Marketing Campaign Services</h3>
              <p>
                We offer a wide range of services including email marketing
                campaigns tailored to boost your audience engagement. Our team
                of expert marketers is dedicated to delivering high-quality
                email campaigns that align with your specific goals and enhance
                your brand visibility.
              </p>
              <div className="row">
                <div className="col-lg-4">
                  <h5>Custom Email Campaigns</h5>
                  <p>
                    Get professionally crafted email campaigns tailored to your
                    specific audience and marketing objectives.
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Audience Segmentation</h5>
                  <p>
                    Receive comprehensive audience segmentation strategies to
                    personalize your email campaigns and maximize conversions.
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Performance Analytics</h5>
                  <p>
                    Access detailed performance analytics to track the
                    effectiveness of your email campaigns and optimize future
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Annual Reports */}
        <ServicesBanner
          title="Professional White Paper Writing Services"
          desc="We offer a wide range of writing services including white paper creation tailored to meet your informational needs. Our team of expert writers is dedicated to delivering high-quality white papers that provide valuable insights and align with your specific objectives."
          className="col-lg-4"
          col_1_title="Custom White Paper"
          col_1_des="Get professionally crafted white papers tailored to your specific industry and audience."
          col_2_title="Research and Analysis"
          col_2_desc="Receive comprehensive research and analysis to support your white paper content and enhance its credibility."
          col_3_title="Design and Formatting"
          col_3_desc="Access meticulous design and formatting services to ensure your white papers are visually appealing and easy to read."
          imgUrl="/images/content7.jpg"
        />

        {/* Streamlined Content Solution */}
        <div className="content-solution">
          <div className="container text-center">
            <h3>Streamlined Content Solution</h3>
            <div className="row">
              <div className="col-lg-4 text-start column sm-mt-5">
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
              <div className="col-lg-4 text-start column sm-mt-5">
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
              <div className="col-lg-4 text-start column sm-mt-5">
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
        <BlogsCards display="d-none" />
        {/* Info Section card */}
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
        {/* footer */}
      </main>
      <Footer />
    </>
  );
};
