import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import Dropdown from 'react-bootstrap/Dropdown';

const AdminHeader = ({ justify_content, display }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  let servicesTimer;
  let aboutTimer;

  const handleLogout = () => {
    logout();
    // Optionally redirect user after logout, if necessary
  };

  const getUsernameBeforeAt = () => {
    if (!user || !user.email) return "";
    return user.email.substring(0, user.email.indexOf('@'));
  };

  const handleServicesEnter = () => {
    clearTimeout(servicesTimer);
    servicesTimer = setTimeout(() => {
      setServicesOpen(true);
    }, 1000); // Adjust delay time here (in milliseconds)
  };

  const handleServicesLeave = () => {
    clearTimeout(servicesTimer);
    setServicesOpen(false);
  };

  const handleAboutEnter = () => {
    clearTimeout(aboutTimer);
    aboutTimer = setTimeout(() => {
      setAboutOpen(true);
    }, 1000); // Adjust delay time here (in milliseconds)
  };

  const handleAboutLeave = () => {
    clearTimeout(aboutTimer);
    setAboutOpen(false);
  };

  return (
    <header className="sticky-top top-0 admin_header">
      <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/home">
            <img
              src="/images/Serve Biznes logo png.png"
              alt="Serve Biznes Logo"
              style={{ width: "60px" }}
            />
          </Link>
          <div className="toggle-btn">
            {isAuthenticated && (
              <Link to="/signin" className="d-block d-lg-none">
                <i className="fa-solid fa-user text-light login_icon" />
              </Link>
            )}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div
            className={`collapse navbar-collapse ${justify_content}`}
            id="navbarText"
          >
            <ul
              className={`order-item navbar-nav align-items-center me-auto mb-2 mb-lg-0 ${display}`}
            >
              <li className="nav-item">
                <Link
                  className="nav-link text-light active"
                  aria-current="page"
                  to="/adminMain"
                >
                  Dashboard
                </Link>
              </li>
              <li
                className="nav-item "
              >
                <Link to="/admin/Manage_Feedbacks" className="nav-link">
                  <button className="dropbtn">Feedbacks</button>
                </Link>
                
              </li>
              <li
                className="nav-item "
              >
                <Link to="/admin/Manage_Comments" className="nav-link">
                  <button className="dropbtn"> Comments</button>
                </Link>

              </li>
              <li
                className="nav-item "
              >
                <Link to="/admin/Manage_Contacts_Details" className="nav-link">
                  <button className="dropbtn"> Contacts</button>
                </Link>

              </li>
              <li
                className="nav-item "
              >
                <Link to="/admin/Manage_Users" className="nav-link">
                  <button className="dropbtn"> Users</button>
                </Link>

              </li>
              <li
                className="nav-item "
              >
                <Link to="/admin/Manage_NewsLetters" className="nav-link">
                  <button className="dropbtn"> NewsLetters</button>
                </Link>

              </li>
              <li
                className="nav-item "
              >
                <Link to="/admin/Manage_Blogs" className="nav-link">
                  <button className="dropbtn"> Blogs</button>
                </Link>

              </li>
              {/* <li
                className="nav-item "
              >
                <Link to="/admin/Manage_Faqs" className="nav-link">
                  <button className="dropbtn"> FAQ's</button>
                </Link>

              </li> */}
              <li
                className="nav-item "
              >
                <Link to="/admin/create-faq" className="nav-link">
                  <button className="dropbtn"> Create FAQ</button>
                </Link>

              </li>

              <li
                className="nav-item "
              >
                <Link to="/admin/Manage-services" className="nav-link">
                  <button className="dropbtn"> Manage Services</button>
                </Link>

              </li>
            </ul>
            {isAuthenticated ? (
              <Dropdown>
                <Dropdown.Toggle
                  className="btn btn-light border-2"
                  id="dropdownMenuButton"
                >
                  {getUsernameBeforeAt()}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <span className="navbar-text d-none d-lg-block">
                <button className="px-3 py-2 btn btn-light border-2" style={{fontSize:"12px"}}>
                  <Link to="/signin">Sign In</Link>
                </button>
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
