
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../Context/OrderContext";

export const Calculator = () => {
  const { addToCart } = useContext(OrderContext); // Use addToCart instead of setOrderDetails
  const [services, setServices] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [pages, setPages] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceName, setSelectedServiceName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSubjectName, setSelectedSubjectName] = useState("");
  const [selectedPages, setSelectedPages] = useState("");
  const [selectedPagesName, setSelectedPagesName] = useState("");
  const [selectedUrgency, setSelectedUrgency] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(
        "https://serve.servebiznes.com/api/all-services"
      );
      const data = await response.json();
      if (response.ok) {
        setServices(data.services_name || []);
      } else {
        setError("Failed to fetch services");
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      setError("Failed to fetch services");
    }
  };

  const fetchSubjects = async (serviceId) => {
    try {
      const response = await fetch(
        `https://serve.servebiznes.com/api/servicescontent/${serviceId}`
      );
      const data = await response.json();
      if (response.ok) {
        setSubjects(data.services_name || []);
      } else {
        setError("Failed to fetch subjects");
      }
    } catch (error) {
      console.error("Error fetching subjects:", error);
      setError("Failed to fetch subjects");
    }
  };

  const fetchPages = async (serviceId, contentId) => {
    try {
      const response = await fetch(
        `https://serve.servebiznes.com/api/servicescontentpage/1`
      );
      const data = await response.json();
      if (response.ok) {
        setPages(data.services_name || []);
      } else {
        setError("Failed to fetch pages");
      }
    } catch (error) {
      console.error("Error fetching pages:", error);
      setError("Failed to fetch pages");
    }
  };

  const handleServiceChange = (e) => {
    const selectedServiceId = e.target.value;
    const serviceName = services.find(service => service.id == selectedServiceId).service_name;
    setSelectedService(selectedServiceId);
    setSelectedServiceName(serviceName);
    setSelectedSubject("");
    setSelectedSubjectName("");
    setSelectedPages("");
    setSelectedPagesName("");
    setSelectedUrgency("");
    setPrice(0);
    fetchSubjects(selectedServiceId);
    setPages([]);
  };

  const handleSubjectChange = (e) => {
    const selectedSubjectId = e.target.value;
    const subjectName = subjects.find(subject => subject.id == selectedSubjectId).content_name;
    setSelectedSubject(selectedSubjectId);
    setSelectedSubjectName(subjectName);
    setSelectedPages("");
    setSelectedPagesName("");
    setSelectedUrgency("");
    setPrice(0);
    fetchPages(selectedService, selectedSubjectId);
  };

  const calculatePrice = (pages, urgency) => {
    let basePrice = 5; // Default discounted price per page
  
    // Check urgency and adjust base price if urgency is below 3 days
    if (["4h", "8h", "16h", "1 day", "2 days"].includes(urgency)) {
      basePrice = 10; // Increase the price per page if urgency is below 3 days
    }
  
    const originalPrice = basePrice * 1.25; // 25% higher than the discounted price
    const totalPrice = pages * basePrice;
    const totalOriginalPrice = pages * originalPrice;
    return {
      totalPrice: Math.round(totalPrice), // Round off the discounted price
      totalOriginalPrice: Math.round(totalOriginalPrice), // Round off the original price
    };
  };

  const handlePagesChange = (e) => {
    const selectedPageId = e.target.value;
    const pageName = pages.find((page) => page.page_no == selectedPageId).page_name;
    setSelectedPages(selectedPageId);
    setSelectedPagesName(pageName);
  
    // Calculate price considering the selected urgency
    const { totalPrice, totalOriginalPrice } = calculatePrice(selectedPageId, selectedUrgency);
    setPrice(totalPrice);
    setOriginalPrice(totalOriginalPrice);
  };
  
  const handleUrgencyChange = (e) => {
    const urgencyValue = e.target.value;
    setSelectedUrgency(urgencyValue);
  
    // Recalculate price based on the selected urgency
    if (selectedPages) {
      const { totalPrice, totalOriginalPrice } = calculatePrice(selectedPages, urgencyValue);
      setPrice(totalPrice);
      setOriginalPrice(totalOriginalPrice);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const orderData = {
      service_name: selectedServiceName,
      subject: selectedSubjectName,
      page_no: selectedPagesName,
      urgency: selectedUrgency,
      price: price,
      _token: csrfToken, // Include the CSRF token in the request body
    };
    // addToCart(orderData); // Use addToCart instead of setOrderDetails
  
    try {
      setLoading(true);
      const response = await fetch("https://serve.servebiznes.com/api/ordernow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
  
      const data = await response.json();
      console.log("Data submitted:", data);
      if (response.ok) {
        console.log("Order submitted successfully:", data);
        navigate("/AddOrder", { state: orderData });
      } else {
        console.error("Failed to submit order:", data);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <div className="container  d-flex flex-column" data-aos="zoom-in">
        <div className="side-bar">
          <h1 className="side-head">Budget Calculator</h1>
          <form onSubmit={handleSubmit} id="bannerform">
            <div className="form-box">
              <div className="loader" style={{}}>
                <div className="box select_services">
                  <label
                    htmlFor="ass_group_list"
                    style={{
                      left: "-9999em",
                      opacity: 0,
                      position: "absolute",
                    }}
                  >
                    Enter Email
                  </label>
                  <select
                    id="ass_group_list"
                    aria-label="assignment"
                    name="group_id"
                    onChange={handleServiceChange}
                    data-type="blank"
                    style={{ color: "rgb(29, 29, 29)" }}
                  >
                    <option unit_tag="Pages | Words" value="">
                      Select Services
                    </option>
                    {services.map((service) => (
                      <option
                        key={service.id}
                        unit_tag="Pages | Words"
                        data-key={service.service_name}
                        value={service.id}
                      >
                        {service.service_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="box subject_list" id="get_subject">
                  <select
                    id="ass_group_list"
                    aria-label="assignment"
                    name="group_id"
                    onChange={handleSubjectChange}
                    data-type="blank"
                    style={{ color: "rgb(29, 29, 29)" }}
                  >
                    <option unit_tag="Pages | Words" value="">
                      Select Subject
                    </option>
                    {subjects.map((subject) => (
                      <option
                        key={subject.id}
                        value={subject.id}
                      >
                        {subject.content_name}
                      </option>
                    ))}
                  </select>
                </div>
                <span
                  className="select-box"
                  id="q_w_calcu"
                  style={{ display: "none" }}
                >
                  <div className="box select-bx select-bx-half select-bx-last questions_online_exam">
                    <select id="no_of_q" aria-label="no_of_q">
                      <option selected="" value={1}>
                        1 Questions
                      </option>
                    </select>
                  </div>
                  <div className="box select-bx select-bx-half questions_words">
                    <select id="no_of_w" aria-label="no_of_w">
                      <option selected="" value={50}>
                        50 Words/Question
                      </option>
                    </select>
                  </div>
                </span>
                <div
                  className="box select-bx select-bx-half page_words"
                  id="pages_count_parent"
                >
                  <select
                    id="pages_count"
                    name="pages"
                    style={{ color: "rgb(29, 29, 29)" }}
                    onChange={handlePagesChange}
                    disabled={!selectedSubject}
                  >
                    <option value="" disabled="">
                      Select
                    </option>
                    {pages.map((page) => (
                      <option key={page.id} value={page.page_no}>
                        {page.page_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className="box select-bx select-bx-half select-bx-last"
                  id="urgency_drop"
                >
                  <select
                    id="urgency"
                    name="urgency"
                    aria-label="urgency"
                    style={{ color: "rgb(29, 29, 29)" }}
                    onChange={handleUrgencyChange}
                    disabled={!selectedPages}
                  >
                    <option value="" disabled="">
                      -- Select Urgency --
                    </option>
                    <option value="4h">4 hours</option>
                    <option value="8h">8 hours</option>
                    <option value="16h">16 hours</option>
                    <option value="1 day">1 Day</option>
                    <option value="2 days">2 Days</option>
                    <option value="3 days">3 Days</option>
                    <option value="4 days">4 Days</option>
                    <option value="5 days">5 Days</option>
                    <option value="6 days">6 Days</option>
                    <option value="7 days">7 Days</option>
                    <option value="8 days">8 Days</option>
                    <option value="9 days">9 Days</option>
                    <option value="10 day">10 Days</option>
                    <option value="15 day">15 Days</option>
                    <option value="20 day">20 Days</option>
                    <option value="25 day">25 Days</option>
                    <option value="30 day">30 Days</option>
                  </select>
                </div>
                <div className="upload_file_box" style={{ display: "none" }}>
                  <button className="upload-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.506"
                      height="13.188"
                      viewBox="0 0 12.506 15.188"
                    >
                      <g transform="translate(-46.367)">
                        <path
                          d="M49.942,11.614H55.3V6.253h3.574L52.62,0,46.367,6.253h3.574v5.361ZM46.367,13.4H58.873v1.789H46.367Z"
                          transform="translate(0)"
                        />
                      </g>
                    </svg>
                    &gt;Drop file here or Click to upload
                  </button>
                  <input
                    type="file"
                    name="file[]"
                    id="upload_file"
                    multiple=""
                    accept=".txt, .DOCX, .DOC, .docx, .doc, .pdf, .PDf"
                  />
                  <span
                    className="file-type-error"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="upload_file_result" style={{ display: "none" }}>
                  <ul className="ul_list" />
                </div>
                <div className="amount-banner">
                  <div className="amnt-left">
                    <span className="off">25% Off</span>
                    <s className="real-price basePrice">£{originalPrice ? originalPrice : "6"}</s>
                  </div>
                  <p className="symbole">
                  £ <span className="value offerPrice">{price ? price : "5"}</span>
                  </p>
                </div>
              </div>
              <div className="form-loader" style={{ display: "none" }}>
                <svg
                  width={50}
                  height={50}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                  className="lds-rolling lm_loader"
                >
                  <circle
                    cx={50}
                    cy={50}
                    fill="none"
                    stroke="#246ED0"
                    strokeWidth={10}
                    r={35}
                    strokeDasharray="164.93361431346415 56.97787143782138"
                    transform="rotate(287.866 50 50)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      calcMode="linear"
                      values="0 50 50;360 50 50"
                      keyTimes="0;1"
                      dur="1s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>
            <button type="submit" className="con_btn button mb-5">
              {loading ? "Plz wait.." : " Order Now"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
