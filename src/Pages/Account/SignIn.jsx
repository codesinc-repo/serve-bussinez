import React, { useState } from 'react';
import './login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSign, setisSign] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const adminCredentials = {
    email: 'admin@servebusiness.com',
    password: 'admin123'
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://serve.servebiznes.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const responseData = await response.json();
  
      if (response.ok) {
        // Login successful
        login({ email: formData.email, ...responseData });
        toast.success('Login successful');
        if (formData.email === adminCredentials.email && formData.password === adminCredentials.password) {
          navigate("/adminMain");
        } else {
          navigate("/");
        }
      } else {
        // Login failed
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      toast.error('Error logging in. Please try again later.');
    }
  };
  
  return (
    <>
      <main>
        <div className="signin">
          <div className="signin_logo">
            <a href="/">
              <img src="/images/Serve Biznes logo png.png" width={100} alt="" />
            </a>
          </div>
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <div className="input-field">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label>Enter your Password</label>
              </div>
              <div className="forget">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" />
                  <p>Remember me</p>
                </label>
                <a href="#" className="text-primary">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="mt-4">
                Sign In
              </button>
              <div className="register">
                <p>
                  Don't have an account?{' '}
                  <a href="/signup">
                    <b>Sign Up</b>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};
