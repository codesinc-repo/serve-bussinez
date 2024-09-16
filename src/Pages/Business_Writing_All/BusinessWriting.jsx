import React, { useState, useEffect, useCallback } from 'react';
import Header from "../../Components/Header";
import { IntroText } from "../../Components/IntroText";
import { ServicesBanner } from "../../Components/ServicesBanner";
import { Footer } from "../../Components/Footer";
import { BusinessWritingCards } from "../../Components/Cards/BusinessWritingCards";
import Testimonials from "../../Components/Testimonials";
import { FAQ } from "../../Components/FAQ";
import { OrderSteps } from "../../Components/OrderSteps";
import { Outlet } from "react-router-dom";
import MovingText from 'react-moving-text'
import './BusinessWriting.css'
import BusinessWritingMain from "./2024-08-01-quality-business-writing.json"
import OurBenefit from '../../Components/OurBenefits';
import PricingMeet from '../../Components/PricingMeet';
import ContactForm from '../../Components/ContactForm';
import HowItWork from '../../Components/HowToItWork';
import { Link } from 'react-router-dom';
import OrderImage from '../../Components/OrderImage';


export const BusinessWriting = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (BusinessWritingMain) {
      setData(BusinessWritingMain);
      if (BusinessWritingMain.sections) {
        setSections(BusinessWritingMain.sections);
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

      <main className="overflow-x-hidden" style={{ position: 'relative' }}>

        <Header />
        <OrderImage /> 
        <OurBenefit />
        <HowItWork />
        <PricingMeet />

        {/* <IntroText
          subtitle="Expertise"
          title="Quality Business Writing"
          desc="Get professional essay writing services from our team of experienced writers. We deliver high-quality essays tailored to your specific requirements"
        />

        <ServicesBanner
          subtitle="Efficient"
          title="Custom Business Writing Tailored to Your Needs"
          desc="Our custom essay writing process is designed to meet the unique requirements of students. We provide high-quality essays that are tailored to your specific needs and academic level."
          col_1_title="Quality"
          col_1_des="Experts who ensure the highest standards of quality and originality in every essay."
          col_2_title="On-time"
          col_2_desc="We guarantee timely delivery, allowing you to submit your essays without any delays."
          className="col-lg-6"
          imgUrl="/images/Trailor writing.jpg"
        /> */}
        {/* </div>
            </>
          )} */}


        <div className="text-heading p-4 text-center">
          <h1 data-aos="fade-up" data-aos-duration="1000" style={{color:"blue"}}>What we offer</h1>
          {/* <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">projects Delivery</h1>
          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="">
            Our process is designed to make it easy for students to order and
            receive their academic
          </p>
          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            documents. From placing an order to receiving the final document, we
            ensure a smooth and
          </p>
          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">efficient experience.</p> */}
        </div>
        <div className="container">
          <BusinessWritingCards />
        </div>


        {/* <ServicesBanner
          subtitle="Quality"
          title="Expert Business Writing Service for your Business"
          desc="Our essay writing service provides students with expert writers, original content, and free revisions. We are committed to delivering high-quality essays that meet your academic needs."
          col_1_title="What we offer"
          col_1_des="Our team of experienced writers ensures your essays are well-researched and professionally written."
          col_2_title="Original Content"
          col_2_desc="We guarantee 100% original and plagiarism free essays tailored to your specific requirements."
          className="col-lg-6"
          imgUrl="/images/Expert.jpg"
        /> */}

        {/* <OrderSteps imgUrl={"../images/Trailor writing.jpg"} /> */}


        <Testimonials />

        <FAQ />
        <ContactForm />
        <Footer />
      </main>
      <Outlet />
    </>
  );
};
