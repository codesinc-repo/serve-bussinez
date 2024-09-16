import React, { useState, useEffect } from "react";
import axios from "axios";

export const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("https://serve.servebiznes.com/api/all-faq"); // Replace with your API endpoint
        console.log(response.data); // Log response to verify its structure
        setFaqs(response.data.faqs || []); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
  
    fetchFaqs();
  }, []);
  

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container-faqs mt-5 mt-md-3">
      <div className="container">
        <h2 className="text-center py-2" data-aos="fade-up">FAQs</h2>
        <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
          Find answers to common questions about our services, ordering process,
          and guarantees.
        </p>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="accordion-item p-1" data-aos="slide-right" data-aos-delay={`${index * 100}`}>
              <button
                id={`accordion-button-${index}`}
                aria-expanded={activeIndex === index ? "true" : "false"}
                onClick={() => toggleAccordion(index)}
              >
                <span className="accordion-title px-2">
                  {faq.title}
                </span>
                <span className={`icon ${activeIndex === index ? "open" : "close"}`} aria-hidden="true" />
              </button>
              <div
                className={`accordion-content px-2 ${activeIndex === index ? "open" : "close"}`}
              >
                <p>
                  {faq.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
