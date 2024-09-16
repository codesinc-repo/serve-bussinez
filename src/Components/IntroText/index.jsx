import React, { useEffect } from "react";
import AOSInitializer from "../../AOSInitializer";
import MovingText from 'react-moving-text'
export const IntroText = ({ subtitle, title, desc }) => {

  return (
    <div className="main-section container overflow-hidden px-md-2 px-4" >
      <div className="row px-sm-5" >
        <div className="col-lg-6">
            <p>{subtitle}</p>
              <h1 data-aos="fade-up">{title}</h1>
        </div>
        <div className="col-lg-6">
          <p data-aos="fade-up" data-aos-delay="250" className="mt-4">
            {desc}
          </p>
        </div>
      </div>
    </div>

  );
};
