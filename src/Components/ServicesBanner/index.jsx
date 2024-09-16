import React from "react";
import AOSInitializer from "../../AOSInitializer";
import MovingText from 'react-moving-text';

export const ServicesBanner = ({
  subtitle,
  title,
  desc,
  col_1_title,
  col_1_des,
  col_2_title,
  col_2_desc,
  col_3_desc,
  col_3_title,
  className,
  imgUrl
}) => {
  return (
    <div className="container-services center container px-md-5 px-4">
      <div className="row">
        <div className="col-lg-6 pt-4">
          <p data-aos="fade-up" data-aos-duration="500">{subtitle}</p>
          <h1 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">{title}</h1>
          <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            {desc}
          </p>

          <div className="row">
            <div className={className} data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500">
              <h5>{col_1_title}</h5>
              <p>{col_1_des}</p>
            </div>
            <div className={className} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500">
              <h5>{col_2_title}</h5>
              <p>{col_2_desc}</p>
            </div>
            <div className={className} data-aos="zoom-in" data-aos-delay="400" data-aos-duration="500">
              <h5>{col_3_title}</h5>
              <p>{col_3_desc}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={imgUrl}
            alt="Service Banner"
            width="580px"
            data-aos="zoom-in"
            className="w-100"
            data-aos-duration="1300"
          />
        </div>
      </div>
    </div>
  );
};
