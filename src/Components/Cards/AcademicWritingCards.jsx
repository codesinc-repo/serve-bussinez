// src/components/AcademicWritingCards/AcademicWritingCards.js
import React from 'react';
import AOSInitializer from '../../AOSInitializer';
import { Link } from 'react-router-dom';

export const AcademicWritingCards = () => {
  return (
    <>
      <AOSInitializer />
      <div className="row">
        {/* card 01 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-2 px-4" data-aos="flip-left" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic1.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services">
                    Essay Writing
                  </Link>
                </h3>
                <p>
                  Crafting custom essays on a variety of topics and across
                  different academic levels.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* card 02 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-0 px-4" data-aos="flip-right" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic2.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services">
                    Research Papers
                  </Link>
                </h3>
                <p>
                  Writing detailed papers that involve extensive research,
                  critical analysis, and synthesis of information related to a
                  specific topic.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* card 03 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-0 px-4" data-aos="flip-left" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic3.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services">
                    Thesis Writing
                  </Link>
                </h3>
                <p>
                  Providing support in writing comprehensive theses for
                  undergraduate and postgraduate students, including proposal
                  development and literature review.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* card 04 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-0 px-4" data-aos="flip-right" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic4.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services2">
                    Dissertation Writing
                  </Link>
                </h3>
                <p>
                  Providing support in writing comprehensive theses for
                  undergraduate and postgraduate students, including proposal
                  development and literature review.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* card 05 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-0 px-4" data-aos="flip-left" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic5.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services2">
                    Case Studies
                  </Link>
                </h3>
                <p>
                  Creating detailed analysis of a particular case or scenario
                  within a real-world context, often used in business and law
                  schools.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* card 06 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-0 px-4" data-aos="flip-right" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic6.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services2">
                    Term Papers
                  </Link>
                </h3>
                <p>
                  Writing term papers that require students to discuss a
                  concept, event, or point of view related to the course
                  content.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* card 07 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-0 px-4" data-aos="flip-left" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic7.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services3">
                    Annotated Bibliographies
                  </Link>
                </h3>
                <p>
                  Compiling lists of sources with annotations that provide a
                  summary and an evaluation of each source.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* card 08 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-0 px-4" data-aos="flip-right" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic8.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services3">
                    Book Reviews
                  </Link>
                </h3>
                <p>
                  Writing critical assessments of published books, often
                  required in literature and social sciences courses.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* card 09 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-0 px-4" data-aos="flip-left" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic9.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services3">
                    Lab Reports
                  </Link>
                </h3>
                <p>
                  Documenting experiments and providing a comprehensive analysis
                  of results, commonly required in science courses.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* card 10 */}
        <div className="col-lg-4 col-md-6 col-sm-12 text-start px-md-0 px-4" data-aos="flip-right" data-aos-duration="1000">
          <div className="service-item service-dianuj">
            <div className="service-single mx-2">
              <div className="service-img">
                <img
                  src="/images/academic10.jpg"
                  alt="Service Frequency Calculator"
                  height="200px"
                  width="100%"
                  className='sm-width'
                />
              </div>
              <div className="service-content long-heading">
                <h3>
                  <Link className="" to="/Academic_Services3">
                    Article Critiques
                  </Link>
                </h3>
                <p>
                  Critically evaluating journal articles and providing a
                  detailed assessment of the content, methodology, and
                  significance of the work.
                </p>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicWritingCards;
