import AOSInitializer
 from "../../AOSInitializer";
import MovingText from 'react-moving-text'


export const GetStarted = () => {
  return (
    <>
      <div className="container-get-started  container overflow-hidden border-spacing-1 p-md-5 pt-0 pt-sm-0">
        <div className="row d-flex align-items-md-center justify-content-center text-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-duration="500">
          <MovingText
             type="fadeInFromBottom"
             duration="1000ms"
             delay="0"
             direction="normal"
             timing="ease-in"
             iteration="1"
             fillMode="backwards">
            <h2>Get Started with Us</h2>
          </MovingText>
          <MovingText
             type="fadeInFromBottom"
             duration="1000ms"
             delay="0"
             direction="normal"
             timing="ease-in"
             iteration="1"
             fillMode="backwards">
            <h2>Today</h2>
          </MovingText>
          <MovingText
             type="fadeInFromBottom"
             duration="1000ms"
             delay="0"
             direction="normal"
             timing="ease-in"
             iteration="1"
             fillMode="backwards">
            <p>Experience top-quality academic writing services tailored to</p>
          </MovingText>
          <MovingText
             type="fadeInFromBottom"
             duration="1000ms"
             delay="0"
             direction="normal"
             timing="ease-in"
             iteration="1"
             fillMode="backwards">
            <p>your needs.</p>
          </MovingText>
            <button className="px-3 py-2 btn btn-outline-dark border-2 btn btn-outline-dark border-2">
              Learn More
            </button>
            <a href="SignIn">
              <button className="ms-1 px-3 py-2 btn btn-outline-dark border-2 btn btn-outline-dark border-2">
                Sign In
              </button>
            </a>
          </div>
          <div className="col-lg-6 mt-3 object-cover" data-aos="fade-left" data-aos-duration="500">
            <img
              src="/images/notebook-3820634_1280.jpg"
              alt=""
              className="sm-width"
              height="300px"
              width="auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
