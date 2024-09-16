import MovingText from 'react-moving-text'
import SubscribeUs from '../SubscribeUs';

export const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer rounded-0">
          <div className="footer-row">
            <div className="footer-col" >
              <img
                src="/images/Serve Biznes logo png.png"
                alt=""
                height="100px"
                className="mb-3"
                data-aos="zoom-in"
              />
              <h4 data-aos="slide-right" data-aos-delay="100">Newsletter</h4>
              <p data-aos="slide-right" data-aos-delay="100">
                Subscribe to our newsletter for a weekly dose of news, updates,
                helpful tips, and exclusive offers.
              </p>
              <SubscribeUs/>
            </div>
            <div className="footer-col" data-aos="slide-left" >
              <ul className="links">
                <li className="text-light">
                  <h5>Info</h5>
                </li>
                <li>
                  <a href="/">Serve Biznes</a>
                </li>
                <li>
                  <a href="/ContactUs">Contact Us</a>
                </li>
                <li>
                  <a href="/Business_writing">Business Writing</a>
                </li>
                <li>
                  <a href="/ContentWriting">Content Writing</a>
                </li>
                <li>
                  <a href="/AcademicWriting">Academic Writing</a>
                </li>
              </ul>
            </div>
            <div className="footer-col" data-aos="slide-left" data-aos-delay="300">
              <ul className="links">
                <li className="text-light">
                  <h5>Pages</h5>
                </li>
                <li>
                  <a href="/About">About Serve Biznes</a>
                </li>
                <li>
                  <a href="/HowItWorks">How it Works</a>
                </li>
                <li>
                  <a href="/HonorCode">Honor Code</a>
                </li>
                <li>
                  <a href="/Blogs">Blogs</a>
                </li>
                <li>
                  <a href="/Faq's">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="footer-col" data-aos="slide-left" data-aos-delay="1500">
              <div className="icons">
                <i className="fa-brands fa-facebook-f" />
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-linkedin" />
                <i className="fa-brands fa-github" />
              </div>
            </div>
          </div>
        </section>
      </footer>

    </>
  );
};
