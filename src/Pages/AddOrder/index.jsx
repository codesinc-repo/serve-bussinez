import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import "./order.css";
import Header from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";

const AddOrder = () => {
  const location = useLocation();
  const orderData = location.state || {};
  const { addToCart } = useContext(OrderContext);

  const handleAddToCart = async () => {
    const data = {
      serviceName: orderData.service_name || "Business writing",
      subjectName: orderData.subject || "Business Plans",
      pageNo: orderData.page_no || "Pages/Words", // Use "Pages/Words" as page_no
      urgency: orderData.urgency || "30 day",
      topic: document.getElementById('topic').value || "No Topic Provided", // Include topic
      description: document.getElementById('requirements').value || "No Specific Requirements", // Include requirements
      price: orderData.price || 85,
      originalPrice: orderData.originalPrice || 100,
      date: new Date().toLocaleDateString(), // Adding date for the cart item
      orderId: Math.floor(Math.random() * 1000000), // Random Order ID
    };

    // Add the order to the cart context
    addToCart(data);

    try {
      const response = await axios.post('https://serve.servebiznes.com/api/getcart', data);
      console.log('Add to Cart Response:', response.data);
      // Handle success (e.g., show a success message, redirect to cart, etc.)
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid p-0 order_main_section">
        <div className="container mt-3" data-aos="fade-up" data-aos-duration="1000">
          <div className="row w-100">
            <div className="col-lg-12 banner mx-auto text-center">
              <a href="#">
                <img src="/images/order-promo.svg" width={"100%"} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="container mt-4" data-aos="fade-left" data-aos-duration="1000">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-8">
              <div className="card p-4 mb-4">
                <div className="mb-3">
                  <label htmlFor="service_name" className="form-label">
                    Service Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="service_name"
                    value={orderData.service_name || "Business writing"}
                    readOnly
                  />
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        value={orderData.subject || "Business Plans"}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label htmlFor="pages" className="form-label">
                        Pages/Words
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="pages"
                        value={orderData.page_no || "Pages/Words"} // Use "Pages/Words" as default
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label htmlFor="urgency" className="form-label">
                        Urgency
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="urgency"
                        value={orderData.urgency || "30 day"}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="topic" className="form-label">
                    Enter Topic
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="topic"
                    placeholder="Enter Topic"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="requirements" className="form-label">
                    Specify Your Requirements Here
                  </label>
                  <textarea
                    className="form-control"
                    id="requirements"
                    rows={4}
                    placeholder="The more instructions you provide, the better our writers can craft a paper that meets your needs."
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="upload" className="form-label">
                    Upload
                  </label>
                  <div className="upload-box">
                    <input
                      type="file"
                      className="form-control-file"
                      id="upload"
                    />
                    <p className="mt-2 mb-0">
                      Drop file here or Click to upload
                    </p>
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agree"
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I agree with <a href="#">Privacy Policy</a>,{" "}
                    <a href="#">Terms of Use</a> and{" "}
                    <a href="#">Money Back Guarantee</a> and also accept{" "}
                    <a href="#">Cookie Policy</a>.
                  </label>
                </div>
                <button className="btn btn-warning w-100" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Right Column */}
            <div className="col-md-4">
              <div className="card p-4 mb-4">
                <h4 className="card-title">Order Summary</h4>
                <p>
                  Basic Price: <span className="float-end">{orderData.price || 85}</span>
                </p>
                <p>
                  Plagiarism Report: <span className="float-end">FREE</span>
                </p>
                <p>
                  Discount: <span className="float-end">-</span>
                </p>
                <hr />
                <p className="fw-bold">
                  Total Amount: <span className="float-end">{orderData.price || 85}</span>
                </p>
              </div>
              <div className="card p-4 mb-4">
                <h4 className="card-title">Have A Coupon code?</h4>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter coupon code"
                  />
                  <button className="btn btn-secondary">Apply</button>
                </div>
              </div>
              <div className="card p-4 mb-4">
                <img src="/images/payment-secure.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddOrder;
