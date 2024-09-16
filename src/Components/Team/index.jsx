import React from "react"
import img1 from "../../images/teamImg01.webp"
import img2 from "../../images/teamImg02.webp"
import img3 from "../../images/teamImg03.webp"
import img4 from "../../images/teamImg04.webp"


export const Team = () => {

  return (

    <>
      <div className="container">
        <div className="team pt-5 pt-sm-0 px-sm-5" data-aos="fade-up" data-aos-duration="500">
          <p>Experienced</p>
          <h2>Meet Our Team</h2>
          <p>
            Our professional team of writers, editors, and customer service
            representatives.
          </p>
        </div>
        <div className="row px-sm-5" data-aos="fade-right" data-aos-duration="1000">
          <div className="col-lg-3">
            <div className="cards">
              <div className="card mt-3">
                <img
                  className="card-img-top"
                  src={img1}
                  alt="Card image cap"
                  height="150px"
                />
                <div className="card-body">
                  <h5 className="card-title text-light ">John Doe</h5>
                  <h5 className="card-title text-light ">Writer</h5>
                  <p className="card-text">
                    John is skilled in various writing capacities with numerous
                    academic qualifications.
                  </p>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-square-x-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cards">
              <div className="card mt-3">
                <img
                  className="card-img-top"
                  src={img2}
                  alt="Card image cap"
                  height="150px"
                />
                <div className="card-body">
                  <h5 className="card-title text-light ">Jane Smith</h5>
                  <h5 className="card-title text-light ">Editor</h5>
                  <p className="card-text">
                    Jane ensures the company documents meet the highest standards.
                  </p>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-square-x-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cards">
              <div className="card mt-3">
                <img
                  className="card-img-top"
                  src={img3}
                  alt="Card image cap"
                  height="150px"
                />
                <div className="card-body">
                  <h5 className="card-title text-light ">David Johnson</h5>
                  <h5 className="card-title text-light ">Customer Representative</h5>
                  <p className="card-text">
                    David is dedicated to providing excellent customer support and
                    achieving client satisfaction.
                  </p>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-square-x-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cards">
              <div className="card mt-3">
                <img
                  className="card-img-top"
                  src={img4}
                  alt="Card image cap"
                  height="150px"
                />
                <div className="card-body">
                  <h5 className="card-title text-light ">Emily Wilson</h5>
                  <h5 className="card-title text-light ">Writer</h5>
                  <p className="card-text">
                    Emily has a passion for research and crafting written customer
                    responses.
                  </p>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="#" className="btn">
                    <i className="fa-brands fa-square-x-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}