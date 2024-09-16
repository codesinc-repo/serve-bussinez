import React, { useState } from "react";
import img1 from "../../images/contect form.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        subject: "",
        comments: "",
    });
    const [responsecomments,setResponsecomments] =useState()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://serve.servebiznes.com/api/contactus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                const successcomments = "Your comments has been sent successfully!";
                toast.success(successcomments);
                setResponsecomments(successcomments);
                setFormData({
                    name: "",
                    company: "",
                    phone: "",
                    email: "",
                    subject: "",
                    comments: "",
                });
            } else {
                if (data.errors) {
                    // Display specific validation errors
                    for (let key in data.errors) {
                        data.errors[key].forEach((error) => toast.error(error));
                    }
                } else {
                    const errorcomments = "There was an error sending your comments. Please try again.";
                    toast.error(errorcomments);
                    setResponsecomments(errorcomments);
                }
            }
        } catch (error) {
            const errorcomments = "An error occurred. Please check your internet connection and try again.";
            toast.error(errorcomments);
            setResponsecomments(errorcomments);
        }
    };
    
    return (
        <>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="h4 font-weight-bold text-primary">Need more help?</h2>
                        <p className="text-muted">Let us know if you need more help.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="company">
                                        Company
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="company"
                                        placeholder="Company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="comments">
                                    comments
                                </label>
                                <textarea
                                    className="form-control"
                                    id="comments"
                                    rows={4}
                                    placeholder="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button className="btn btn-outline-dark w-100" type="submit">
                                Contact Now
                            </button>
                        </form>
                        {/* {responsecomments && (
                            <div className="alert mt-3" role="alert">
                                {responsecomments}
                            </div>
                        )} */}
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <img
                            aria-hidden="true"
                            alt="illustration of a person looking at a signpost"
                            src={img1}
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
