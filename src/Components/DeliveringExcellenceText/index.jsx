import AOSInitializer from "../../AOSInitializer";
import MovingText from 'react-moving-text'


export const DeliveringExcellence = ({h1,des1,img}) => {
  return (
    <>
      {/* delivery section */}
      <div className="container-delivery container container-services overflow-hidden">
        <div className="row p-sm-5 pt-5 pt-sm-0">
          <div className="col-lg-6" >
            <p data-aos="fade-up">Reliable</p>
            <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">{h1}</h1>
            <h1 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"></h1>
          </div>
          <div className="col-lg-6" >

            <p data-aos="slide-left" data-aos-delay="300" data-aos-duration="1000">
             {des1}
            </p>
            <div className="section-buttons" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <button className="px-3 py-2 btn btn-outline-dark border-2 btn btn-outline-dark border-2">
                Learn More
              </button>
              <a href="/signup">Sign Up &gt;</a>
            </div>

          </div>
          <div className="image-section" style={{ maxheight: 450 }} >
            <img
              src={img}
              alt=""
              width="auto"
              className="mt-5"
              data-aos="zoom-in" data-aos-delay="500"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </>
  )
};
