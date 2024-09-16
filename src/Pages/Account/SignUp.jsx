import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://serve.servebiznes.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Registration successful");
        console.log("Registration successful:", data);
        navigate("/signin");
      } else {
        if (response.status === 422) {
          const errorResponse = await response.json();
          if (errorResponse.errors) {
            // Handle specific validation errors
            Object.values(errorResponse.errors).forEach(errorMsg => {
              toast.error(errorMsg);
            });
          } else {
            toast.error(errorResponse.message || "Registration failed");
          }
        } else {
          toast.error("Registration failed");
        }
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main>
        <div className="signin">
          <div className="signin_logo">
            <a href="/">
              <img src="/images/Serve Biznes logo png.png" width={100} alt="" />
            </a>
          </div>
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <h2>Create an Account</h2>
              <div className="input-field">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Enter your Name</label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Enter your Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Enter your Password</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label>Confirm Password</label>
              </div>
              <div className="forget">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" />
                  <p>I agree with terms and conditions</p>
                </label>
              </div>
              <button className="mt-4" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>
              <div className="register">
                <p>
                  already have an account?{" "}
                  <a href="/signin">
                    <b>Sign In</b>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
