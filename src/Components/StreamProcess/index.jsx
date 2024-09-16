import AOSInitializer from "../../AOSInitializer";
import MovingText from 'react-moving-text'


export const StreamProcess = () => {
  return (
    <>
      <>
        {/* streamlind process */}
        <div className="container-process container text-center overflow-hidden container-services mb-5">
          <div className="text-heading p-sm-4 pt-4 pt-sm-0" data-aos="fade-up" data-aos-duration="1000">
            <MovingText
              type="fadeInFromBottom"
              duration="1000ms"

              delay="0"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="backwards">
              <h1 >Streamlined process for writing</h1>
            </MovingText>
            <MovingText
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="backwards">
              <h1>projects Delivery</h1>
            </MovingText>
            <MovingText
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="backwards">
              <p className="">
                Our process is designed to make it easy for students to order and
                receive their academic
              </p>
            </MovingText>
            <MovingText
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="backwards">
              <p>
                documents. From placing an order to receiving the final document,
                we ensure a smooth and
              </p>
            </MovingText>
            <MovingText
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="backwards">
              <p>efficient experience.</p>
            </MovingText>
          </div>
          <div className="row p-sm-5 pt-0 pt-sm-0">
            <div className="col-lg-6 p-3 text-start" data-aos="fade-right" data-aos-duration="500">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-1 fs-3 text-dark">
                  <MovingText
                    type="bounce"
                    duration="1000ms"
                    delay="0"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="backwards">
                    <i className="fa-solid fa-cube" />
                  </MovingText>
                </div>
                <div className="col-lg-9 mt-0 ms-2 text-start">
                  <MovingText
                    type="fadeInFromBottom"
                    duration="1000ms"
                    delay="0"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="backwards">
                    <h4>Place your order</h4>
                    <p>
                      Share your assignment details for your academic papers.
                      Order
                    </p>
                  </MovingText>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-1 fs-3 text-dark">
                  <MovingText
                    type="bounce"
                    duration="1000ms"
                    delay="0"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="backwards">
                    <i className="fa-solid fa-cube" />
                  </MovingText>
                </div>
                <div className="col-lg-9 mt-0 ms-2 text-start">

                  <MovingText
                    type="fadeInFromBottom"
                    duration="1000ms"
                    delay="0"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="backwards">
                    <h4>Writer assignment</h4>
                    <p>
                      Your set of instructions will be assigned to the most
                      suitable writer.
                    </p>
                  </MovingText>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-1 fs-3 text-dark" >
                  <MovingText
                    type="bounce"
                    duration="1000ms"
                    delay="0"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="backwards">
                    <i className="fa-solid fa-cube" />
                  </MovingText>
                </div>
                <div className="col-lg-9 mt-0 ms-2">
                  <MovingText
                    type="fadeInFromBottom"
                    duration="1000ms"
                    delay="0"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="backwards">
                    <h4>Quality assurance</h4>
                    <p>
                      Your assignments are checked multiple times for the highest
                      standard of quality before they are sent across.
                    </p>
                  </MovingText>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="slide-left" data-aos-duration="500">
              <img
                src="/images/business banner.jpg"
                alt="business banner"
                width="580px"
                className="object-fit-cover"
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};
