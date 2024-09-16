import React from "react";
import AOSInitializer from "../../AOSInitializer";
import MovingText from 'react-moving-text'

export const AboutBanner = ({img, h1,h2,h3,des1,des2,des3}) => {
  return (
    <>
      {/* choice section */}
      <div className="container-choice container p-sm-5 pt-5 pt-sm-0">
        <div className="row">
          <div className="col-lg-6" data-aos-duration="1000" >
            <img
              data-aos="zoom-in"
              src={img}
              alt="About Banner"
              width="580px"
              className="object-fit-cover"
            />
          </div>
          <div className="col-lg-6">
            <h4 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">{h1}</h4>
            <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              {des1}
            </p>
            <h4 data-aos="fade-up" data-aos-delay="550" data-aos-duration="1000">{h2}</h4>
            <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
              {des2}
            </p>
            <h4 data-aos="fade-up" data-aos-delay="750" data-aos-duration="1000">{h3}</h4>
            <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
              {des3}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
