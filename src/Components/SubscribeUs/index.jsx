import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubscribeUs() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://serve.servebiznes.com/api/subscribeus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe');
            }

            // Show success toast
            toast.success('Subscribed successfully!', {
                className: 'toast-success',
            });
        } catch (error) {
            console.error('Error subscribing:', error);
            // Show error toast
            toast.error('Failed to subscribe', {
                className: 'toast-error',
            });
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="subscribe-form" data-aos="slide-right" data-aos-delay="100">
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleEmailChange}
                    className="subscribe-input"
                    required
                />
                <button type="submit" className="subscribe-button">SUBSCRIBE</button>
            </form>
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
        </>
    );
}

export default SubscribeUs;
