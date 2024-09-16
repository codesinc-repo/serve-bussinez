import React, { useState, useEffect } from 'react';
import { Footer } from "../../Components/Footer";
import Header from "../../Components/Header";
import "./HonorCode.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HonorData from './2024-07-27-the-honor-code-updated.json'; // Import JSON data

export const HonorCode = () => {
  const [formData, setFormData] = useState({
    email: '',
    comments: ''
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (HonorData) {
      setData(HonorData);
      if (HonorData.sections) {
        setSections(HonorData.sections);
      } else {
        setError(new Error('Sections data not found'));
      }
    } else {
      setError(new Error('Data not found'));
    }
  }, []);

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://serve.servebiznes.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          comments: formData.comments
        })
      });

      const responseData = await response.json();

      if (response.ok) {
        // Comment posted successfully
        toast.success('Comment posted successfully');
        // Clear the form after successful submission if needed
        setFormData({ email: '', comments: '' });
      } else {
        // Comment posting failed
        console.error('Failed to post comment:', responseData);
        toast.error('Failed to post comment. Please try again.');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      toast.error('Error posting comment. Please try again later.');
    }
  };
  
  console.log("sections", sections)

  return (
    <>
      {/* <EditorComponent/> */}
        <Header />
      <main className='container' style={{ position: 'relative' }}>
        <ToastContainer />
        <div className="container-fluid container-main">
          <div className="row px-5 px-md-2">
            <div className="col-lg-6 px-5 ">
              <h2 data-aos="fade-right" data-aos-duration="700">{data.title}</h2>
              <p data-aos="fade-up" data-aos-duration="700">
                {data.description}
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img data-aos="zoom-in" data-aos-duration="700" src={data.image} alt="" style={{ width: "265px", height: "266px" }} />
            </div>
          </div>
        </div>
        <div className="container-fluid container-info px-5">
          <div className="text-section text-center px-sm-1">
            <h3 data-aos="fade-up" data-aos-duration="700">{sections[0].section_title}</h3>
            <p data-aos="fade-right" data-aos-duration="700">
              {sections[0].section_content}
            </p>
          </div>
          {/* Cards of services section */}
          <div className="cards p-4" >
            <div className="row">
              <div className="col-lg-6 mt-3" data-aos="zoom-in" data-aos-duration="700">
                <div className="card" style={{}}>
                  <div className="card-body">
                    <h5 className="card-title text-light">{sections[3].section_title}</h5>
                    <p className="card-text">
                      {sections[3].section_content}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-3" data-aos="zoom-in" data-aos-duration="700">
                <div className="card" style={{}}>
                  <div className="card-body">
                    <h5 className="card-title text-light">{sections[2].section_title}</h5>
                    <p className="card-text">
                      {sections[2].section_content}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-3" data-aos="zoom-in" data-aos-duration="700">
                <div className="card" style={{}}>
                  <div className="card-body">
                    <h5 className="card-title text-light">{sections[3].section_title}</h5>
                    <p className="card-text">
                      {sections[3].section_content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Policies for Writing Services */}
        <div className="container-fluid">
          <div className="text-container px-5 pt-5">
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[4].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
              {sections[4].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[5].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
              {sections[5].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[6].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
              {sections[6].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[7].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
              {sections[7].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[8].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
              {sections[8].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[9].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
              {sections[9].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[10].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
              {sections[10].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[11].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
            {sections[11].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[12].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
            {sections[12].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[13].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
            {sections[13].section_content}
            </p>
            <h4 data-aos="fade-up" data-aos-duration="700">{sections[14].section_title}</h4>
            <p data-aos="fade-right" data-aos-duration="700">
            {sections[14].section_content}
            </p>
          </div>
        </div>
        <div className="container px-5 px-md-2 text-center">
          <h2 className="px-5" data-aos="fade-up" data-aos-duration="700">
          {sections[15].section_title}
          </h2>
          {/* <h2 data-aos="fade-up" data-aos-duration="700">Code?</h2> */}
          <p data-aos="fade-right" data-aos-duration="700">
          {sections[15].section_content}
          </p>
          {/* <p data-aos="fade-right" data-aos-duration="700">
            find someone from our team or a customer indulging in malicious
            activities, please submit a report to us
          </p>
          <p data-aos="fade-right" data-aos-duration="700">
            through our support team or via email. We would ensure that strict
            action is taken against the parties
          </p> */}
          <p data-aos="fade-right" data-aos-duration="700">involved:</p>
        </div>
        {/* Checkboxes and Comment Form */}
        <div className="container honor_code">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="checkBoxes mb-3 position-relative d-flex" data-aos="zoom-in" data-aos-duration="700">
                  <input
                    className="form-check-input mychBox mx-3 mt-3 position-absolute"
                    type="checkbox"
                    name="writing"
                    defaultValue="Business Writing"
                    id="businessWritingCheckbox"
                  />
                  <label
                    className="form-control checkLabel py-3 pe-3 ps-55"
                    htmlFor="businessWritingCheckbox"
                  >
                    <div className="text">
                      <h5>Business Writing</h5>
                      <p className="mb-0">
                        We ensure originality and professionalism in all
                        business writing projects, avoiding any form of academic
                        dishonesty or fraud.
                      </p>
                    </div>
                  </label>
                </div>
                <div className="checkBoxes mb-3 position-relative d-flex" data-aos="zoom-in">
                  <input
                    className="form-check-input mychBox mx-3 mt-3 position-absolute"
                    type="checkbox"
                    name="writing"
                    defaultValue="Academic Writing"
                    id="academicWritingCheckbox"
                  />
                  <label
                    className="form-control checkLabel py-3 pe-3 ps-55"
                    htmlFor="academicWritingCheckbox"
                  >
                    <div className="text">
                      <h5>Academic Writing</h5>
                      <p className="mb-0">
                        We strictly adhere to academic integrity, ensuring that
                        all academic writing services are scholarly, properly
                        referenced, and free from plagiarism.
                      </p>
                    </div>
                  </label>
                </div>
                <div className="checkBoxes mb-3 position-relative d-flex" data-aos="zoom-in" data-aos-duration="700">
                  <input
                    className="form-check-input mychBox mx-3 mt-3 position-absolute"
                    type="checkbox"
                    name="writing"
                    defaultValue="Content Writing"
                    id="contentWritingCheckbox"
                  />
                  <label
                    className="form-control checkLabel py-3 pe-3 ps-55"
                    htmlFor="contentWritingCheckbox"
                  >
                    <div className="text">
                      <h5>Content Writing</h5>
                      <p className="mb-0">
                        For engaging and informative content, our content
                        writing services deliver high-quality, original content
                        tailored to your specific audience and requirements.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="container-comment" data-aos="zoom-out" data-aos-duration="700">
                <form onSubmit={handleSubmit} action="action_page.php" >
                  <label htmlFor="e-mail">E-mail</label>
                  <input
                    type="e-mail"
                    id="e-mail"
                    name="email"
                    placeholder="Your E-mail.."
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="comments">Comment</label>
                  <textarea
                    id="comments"
                    name="comments"
                    placeholder="Write something.."
                    style={{ height: 200 }}
                    value={formData.comments}
                    onChange={handleChange}
                    required
                  />
                  <input type="submit" defaultValue="Submit" />
                </form>
              </div>
              <div className="checkBoxes mb-3 position-relative d-flex mt-3" data-aos="zoom-in" data-aos-duration="700">
                <input
                  className="form-check-input mychBox mx-3 mt-3 position-absolute"
                  type="checkbox"
                  name="writing"
                  defaultValue="Others"
                  id="othersCheckbox"
                />
                <label
                  className="form-control checkLabel py-3 pe-3 ps-55"
                  htmlFor="othersCheckbox"
                >
                  <div className="text">
                    <h5>Others</h5>
                    <p className="mb-0">
                      We request our clients and customers to report to us if
                      any of our writers or tutors asks you for any extra
                      payment or commissions. We would take strict action
                      against team members involved in any ill-financial
                      practices.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
        <Footer />
    </>
  );
};
