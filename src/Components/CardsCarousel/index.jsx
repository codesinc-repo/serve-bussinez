

export const CardsCarousel = () => {

    return (
        <>
         <div
          id="carouselExampleControls"
          className="carousel slide mt-4 mb-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 d-flex flex-column mx-auto carasoual_style" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                    <h5>Content Writing Services Overview</h5>
                    <p>
                      Explore our comprehensive range of content writing
                      services designed to meet your diverse needs.
                    </p>
                  </div>
                  <div className="col-lg-4 mx-auto carasoual_style" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
                    <h5>SEO Content Writing</h5>
                    <p>
                      Discover our blog writing services that engage readers and
                      drive traffic to your website.
                    </p>
                  </div>
                  <div className="col-lg-4 mx-auto carasoual_style" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
                    <h5>Copywriting Services</h5>
                    <p>
                      Elevate your brand with our compelling copywriting
                      services tailored to your specific audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 d-flex flex-column mx-auto carasoual_style">
                    <h5>SEO Writing Guide</h5>
                    <p>
                      Introduction to SEO writing and its importance.
                      Understanding keywords and their role in SEO. How to
                      research keywords for your content. Tips for optimizing
                      content for search engines.
                    </p>
                  </div>
                  <div className="col-lg-4 mx-auto carasoual_style">
                    <h5>Copywriting Guide</h5>
                    <p>
                      What is copywriting and its purpose. The difference
                      between copywriting and content writing. Tips for writing
                      persuasive copy.
                    </p>
                  </div>
                  <div className="col-lg-4 mx-auto carasoual_style">
                    <h5>Free Resources</h5>
                    <p>
                      Explore our collection of free resources designed to help
                      you improve your writing skills and succeed in your
                      projects. From writing templates to grammar guides, we've
                      got
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 mx-auto carasoual_style">
                    <h5>Technical Writing Services</h5>
                    <p>
                      Introduction to SEO writing and its importance.
                      Understanding keywords and their role in SEO. How to
                      research keywords for your content. Tips for optimizing
                      content for search engines.
                    </p>
                  </div>
                  <div className="col-lg-4 mx-auto carasoual_style">
                    <h5>Editing and Proofreading Services</h5>
                    <p>
                      What is copywriting and its purpose. The difference
                      between copywriting and content writing. Tips for writing
                      persuasive copy.
                    </p>
                  </div>
                  <div className="col-lg-4 mx-auto carasoual_style">
                    <h5>Content Strategy Consulting</h5>
                    <p>
                      Exploring different forms of creative writing (e.g.,
                      fiction, poetry, storytelling). Techniques for generating
                      ideas and overcoming writer's block.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </>
    )
}