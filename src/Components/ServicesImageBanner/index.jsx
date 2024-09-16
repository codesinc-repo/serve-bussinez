

export const ServicesImageBanner = ({ subtitle, title, desc1, desc2, bgImgUrl }) => {

  return (
    <>
      <div className="banner-section">
        <div className="image-section d-flex align-items-center justify-content-start px-5" style={{ backgroundImage: `url(${bgImgUrl})` }} >
          <div className="col-lg-8 text-light">
            <p data-aos="fade-up">{subtitle}</p>
            <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">{title}</h1>
            <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              {desc1}
            </p>
            <p data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
              {desc2}
            </p>
            <div className="button-section" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">
              <a href="/ContactUs">
                <button className="text-light px-3 py-2 rounded-5 button1">
                  Contact us now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}