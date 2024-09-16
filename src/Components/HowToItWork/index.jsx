import React, { useState, useEffect } from "react";
import howtowork from '../../Pages/HowItWorks/2024-07-29-serve-biznes.json';

const HowItWork = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        if (howtowork) {
            setData(howtowork);
            if (howtowork.sections) {
                setSections(howtowork.sections);
            } else {
                setError(new Error('Sections data not found'));
            }
        } else {
            setError(new Error('Data not found'));
        }
    }, []);

    return (
        <>
            <div className="container-work container overflow-hidden px-md-0 px-4">
                <div className="text-center mt-4">
                    {/* Check if sections[4] exists before accessing it */}
                    {sections[4] && (
                        <h3 data-aos="fade-up" data-aos-duration="500" style={{color:"blue"}}>
                            {sections[4].section_title}
                        </h3>
                    )}
                </div>
                <div className="row mx-2 mx-md-4">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        {/* Check if sections[5] exists before accessing it */}
                        {sections[5] && (
                            <img data-aos="zoom-in" className='w-75' data-aos-duration="500" src={sections[5].section_image} alt="" />
                        )}
                    </div>
                    <div className="col-lg-6 p-0 p-md-5" data-aos="slide-left" data-aos-duration="700">
                        <h1 className="text-secondary">01</h1>
                        {/* Check if sections[5] exists before accessing it */}
                        {sections[5] && (
                            <>
                                <h4>{sections[5].section_title}</h4>
                                <p>{sections[5].section_content}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HowItWork;
