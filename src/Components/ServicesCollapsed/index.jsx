import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BusinessWritingCards } from "../Cards/BusinessWritingCards";
import { AcademicWritingCards } from "../Cards/AcademicWritingCards";
import { ContentWritingCards } from "../Cards/ContentWritingCards";
import MovingText from "react-moving-text";

export const ServicesCollapsed = () => {
  useEffect(() => {
    const collapseButtons = document.querySelectorAll(
      '[data-bs-toggle="collapse"]'
    );
    collapseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-bs-target");
        const collapsibles = document.querySelectorAll(".collapse");
        collapsibles.forEach((collapse) => {
          if (collapse.id !== target.slice(1)) {
            collapse.classList.remove("show");
          }
        });
      });
    });
  }, []);
  return (
    <>
      {/*collapses services starts */}
      <div
        className="container-services  container text-center mt-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <MovingText
          type="fadeInFromBottom"
          duration="1000ms"
          delay="0"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="backwards"
        >
          <h2 className="mb-4 ">Our Services</h2>
        </MovingText>
        <div className="container services_btns">
          <div className="row row-cols-md-3 gap-3 gap-md-0 px-0 px-md-5 mb-5">
            <button
              className="px-2 px-md-4 py-2 m-0 rounded-5 "
              data-bs-toggle="collapse"
              data-bs-target="#demo"
            >
              Business Writing
            </button>
            <button
              className="px-2 px-md-4 py-2 m-0 rounded-5 "
              data-bs-toggle="collapse"
              data-bs-target="#demo1"
            >
              Academic Writing
            </button>
            <button
              className="px-2 px-md-4 py-2 m-0 rounded-5"
              data-bs-toggle="collapse"
              data-bs-target="#demo2"
            >
              Content Writing
            </button>
          </div>
        </div>

        <div id="demo" className="collapse mt-4 p-5">
          <BusinessWritingCards />
        </div>
        <div id="demo1" className="collapse mt-4 p-5">
          <AcademicWritingCards />
        </div>
        <div id="demo2" className="collapse mt-4 p-5">
          <ContentWritingCards />
        </div>
      </div>
    </>
  );
};
