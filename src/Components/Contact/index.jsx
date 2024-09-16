import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "essay-writing",
        country: "afghanistan",
        phone: "",
        comments: ""
    });

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
        "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
        "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji",
        "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
        "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
        "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
        "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kosovo",
        "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
        "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives",
        "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru",
        "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten",
        "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain",
        "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan",
        "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
        "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
        "Yemen", "Zambia", "Zimbabwe"
    ];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://serve.servebiznes.com/api/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            // Show success toast
            toast.success('Form submitted successfully!', {
                className: 'toast-success',
            });

            // Clear form data after successful submission
            setFormData({
                name: "",
                email: "",
                service: "essay-writing",
                country: "afghanistan",
                phone: "",
                comments: ""
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            // Show error toast
            toast.error('Failed to submit form', {
                className: 'toast-error',
            });
        }
    };

    return (
        <div className="contact-us mb-5">
            <div className="background-image">
                <img src="/images/pexels-goumbik-669616.jpg" alt="Background Image" />
            </div>
            <div className="form-container" data-aos="zoom-out">
                <form onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name:"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email:"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <select
                        id="services"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                    >
                        <option value="essay-writing">Essay Writing</option>
                        <option value="thesis-writing">Thesis Writing</option>
                        <option value="book-writing">Book Writing</option>
                    </select>
                    <br />
                    <br />
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    >
                        {countries.map((country, index) => (
                            <option key={index} value={country.toLowerCase()}>
                                {country}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your Phone Number:"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <textarea
                        name="comments"
                        id="txt"
                        placeholder="Comments:"
                        value={formData.comments}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <button type="submit" className="get-started">Get Started</button>
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Contact;
