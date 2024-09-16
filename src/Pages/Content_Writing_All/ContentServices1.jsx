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
import contentservice_1 from "./2024-08-01-content-writing-services-1.json"

export const ContentServices1 = () => {


  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (contentservice_1) {
      setData(contentservice_1);
      if (contentservice_1.sections) {
        setSections(contentservice_1.sections);
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

        <div className="info-section overflow-hidden pt-3 ">
          <div className="text-section text-center my-4">
            <h2>Business Writing Services</h2>
          </div>
        </div>

        <ServicesBanner
          subtitle=""
          title="Professional Blog Writing Services"
          desc="We offer a wide range of writing services including blog posts tailored to meet your content needs. Our team of expert writers is dedicated to delivering high-quality blog posts that engage your audience and align with your specific requirements."
          className="col-lg-4"
          col_1_title="Custom Blog Posts"
          col_1_des="Get professionally written blog posts tailored to your specific requirements and audience preferences."
          col_2_title="Research Support"
          col_2_desc="Receive comprehensive research support to enhance your blog writing and captivate your audience."
          col_3_title="Editing and Proofreading"
          col_3_desc="Access meticulous editing and proofreading services to refine your blog posts and ensure engaging and error-free content."
          imgUrl="/images/content2.jpg"
        />
        {/* grant proposals */}
        <div className="container-services p-5">
          <div className="row">
            <div className="col-lg-6">
              <img src="/images/content3.jpg" alt="Image" width="580px" />
            </div>
            <div className="col-lg-6">
              {/* <p>Reliable</p> */}
              <h3>Professional SEO Content Writing Services</h3>
              <p>
                We offer a wide range of writing services including SEO content
                tailored to boost your online presence. Our team of expert
                writers is dedicated to delivering high-quality SEO content that
                aligns with your specific requirements and improves your search
                engine rankings.
              </p>
              <div className="row">
                <div className="col-lg-4">
                  <h5>Custom SEO Content</h5>
                  <p>
                    Get professionally written SEO content tailored to your
                    specific requirements and target audience.
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Keyword Research</h5>
                  <p>
                    Receive comprehensive keyword research reports to optimize
                    your content and improve search engine visibility.
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Content Optimization</h5>
                  <p>
                    Access meticulously conducted content optimization to
                    strengthen your online presence and attract more organic
                    traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Annual Reports */}
        <ServicesBanner
          subtitle=""
          title="Professional Copywriting for Advertising Services"
          desc="We offer a wide range of writing services including copywriting for advertising tailored to meet your promotional needs. Our team of expert writers is dedicated to delivering high-quality copy that captivates your audience and aligns with your specific advertising goals"
          className="col-lg-4"
          col_1_title="Custom Copy Writing"
          col_1_des="Get professionally written copy tailored to your specific requirements and target audience."
          col_2_title="Brand Messaging"
          col_2_desc="Receive comprehensive brand messaging support to strengthen your advertising campaigns and effectively communicate your brand identity."
          col_3_title="Call-to-Action Optimization"
          col_3_desc="Access meticulously crafted call-to-action strategies to maximize engagement and drive conversions in your advertising content."
          imgUrl="/images/content4.jpg"
        />
        {/* Streamlined Content Solution */}
        <div className="content-solution">
          <div className="container text-center mt-4">
            <h3 className="mb-4">Streamlined Content Solution</h3>
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
        {/* footer */}
      </main>
      <Footer />
    </>
  );
};
