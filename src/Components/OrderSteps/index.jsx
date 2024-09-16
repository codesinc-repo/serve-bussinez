import AOSInitializer from "../../AOSInitializer"
import MovingText from 'react-moving-text'


export const OrderSteps = ({ imgUrl }) => {

  return (
    <>
      <div className="container container-wide-range overflow-hidden container-services mb-5 mt-5">
        <div className="row">
          <div className="col-lg-6 text-end" data-aos="fade-up" data-aos-duration="500">
            <img
              src={imgUrl}
              alt="Trailor writing"
              width="100%"
              className="object-fit-cover sm-width"
            />
          </div>
          <div className="col-lg-6 px-4 mt-2 ">
            <div className="row d-flex justify-content-center" data-aos="fade-left" data-aos-duration="500">
              <div className="col-lg-1 fs-3 text-dark">
                <MovingText
                  type="bounce"
                  duration="2000ms"
                  delay="0"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="backwards">
                  <i className="fa-solid fa-cube" />
                </MovingText>
              </div>
              <div className="col-lg-9 mt-0 ms-2 px-2">
                <h4>Place your order</h4>
                <p>
                  Share your assignment details for your academic papers.
                  Order
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-center" data-aos="fade-left" data-aos-duration="500">
              <div className="col-lg-1 fs-3 text-dark">
                <MovingText
                  type="bounce"
                  duration="2000ms"
                  delay="0"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="backwards">
                  <i className="fa-solid fa-cube" />
                </MovingText>
              </div>
              <div className="col-lg-9 mt-0 ms-2">
                <h4>Writer assignment</h4>
                <p>
                  Your set of instructions will be assigned to the most
                  suitable writer.
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-center" data-aos="fade-left" data-aos-duration="500">
              <div className="col-lg-1 fs-3 text-dark">
                <MovingText
                  type="bounce"
                  duration="2000ms"
                  delay="0"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="backwards">
                  <i className="fa-solid fa-cube" />
                </MovingText>
              </div>
              <div className="col-lg-9 mt-0 ms-2">
                <h4>Quality assurance</h4>
                <p>
                  Your assignments are checked multiple times for the highest
                  standard of quality before they are sent across.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mx-auto">
              <button className="px-3 py-2 btn btn-outline-dark border-2 rounded-5">
               <a className="text-text-decoration-none" href="/AddOrder"> Order Now</a>
              </button>
            </div>
          </div>
        </div>
        <div className="row py-5 text-center">
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="500">
            <div className="card mt-3">
              <img
                className="card-img-top sm-width"
                src="/images/academic10.jpg"
                alt="Consultation"
                height="100%"
                width="100%"

              />
              <h4 className="mt-4">Step 1: Consultation</h4>
              <p>Discuss your academic requirements and our solutions.</p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="500">
            <div className="card mt-3">
              <img
                className="card-img-top sm-width"
                src="/images/academic2.jpg"
                alt="Order Placement"
                height="100%"
                width="100%"
              />
              <h4 className="mt-4">Step 2: Order Placement</h4>
              <p>Place your order and relax while we work.</p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="500">
            <div className="card mt-3">
              <img
                className="card-img-top sm-width"
                src="/images/academic9.jpg"
                alt="Writing Process"
                height="100%"
                width="100%"
              />
              <h4 className="mt-4">Step 3: Writing Process</h4>
              <p>Get your academic content ready for publishing.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}