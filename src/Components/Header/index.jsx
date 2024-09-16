import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import { Button, DropdownButton } from "react-bootstrap";
import { OrderContext } from "../../Context/OrderContext";
import "./header.css";
const Header = ({ justify_content, display }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const { cartItemCount } = useContext(OrderContext); // Use cart item count from context
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  let servicesTimer;
  let aboutTimer;

  const handleLogout = () => {
    logout();
    // Optionally redirect user after logout, if necessary
  };

  const getUsernameBeforeAt = () => {
    if (!user || !user.email) return "";
    return user.email.substring(0, user.email.indexOf("@"));
  };

  const handleServicesEnter = () => {
    clearTimeout(servicesTimer);
    servicesTimer = setTimeout(() => {
      setServicesOpen(true);
    }, 0);
  };

  const handleServicesLeave = () => {
    clearTimeout(servicesTimer);
    setServicesOpen(false);
  };

  const handleAboutEnter = () => {
    clearTimeout(aboutTimer);
    aboutTimer = setTimeout(() => {
      setAboutOpen(true);
    }, 0);
  };

  const handleAboutLeave = () => {
    clearTimeout(aboutTimer);
    setAboutOpen(false);
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <>
      <header className="sticky-top top-0 d-none d-md-block">
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
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <Link to="#" className="nav-link">
                    <button className="dropbtn">Services</button>
                  </Link>
                  {servicesOpen && (
                    <div className="dropdown-content">
                      <Link to="/business_writing">Business Writing</Link>
                      <Link to="/contentwriting">Content Writing</Link>
                      <Link to="/academicwriting">Academic Writing</Link>
                    </div>
                  )}
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                >
                  <Link to="#" className="nav-link">
                    <button className="dropbtn">About Us</button>
                  </Link>
                  {aboutOpen && (
                    <div className="dropdown-content">
                      <Link to="/classofserve">About Serve Biznes</Link>
                      <Link to="/howitworks">How it Works</Link>
                      <Link to="/honorcode">Honor Code</Link>
                      <Link to="/sample">Sample</Link>
                      <Link to="/blogs">Blogs</Link>
                      <Link to="/Faq's">FAQ's</Link>
                      <Link to="/contactus">Contact Us</Link>
                    </div>
                  )}
                </li>
              </ul>
              <span className="navbar-text pb-0">
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping text-light mx-3"></i>
                  {cartItemCount > 0 && (
                    <span className="cart-count">{cartItemCount}</span>
                  )}
                </Link>
              </span>
              {isAuthenticated ? (
                <Dropdown className="account-dropdown">
                  <DropdownButton
                    className="btn btn-light border-2 m-0 p-0 bg-none border-0 "
                    id="dropdownMenuButton"
                    title={getUsernameBeforeAt()}
                  >
                    <Dropdown.Item as={Link} to="/profile">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/changePassword">
                      Change Password
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </DropdownButton>
                </Dropdown>
              ) : (
                <span className="navbar-text d-none d-lg-block">
                  <button className="px-3 py-2 btn btn-light border-2">
                    <Link to="/signin">Sign In</Link>
                  </button>
                </span>
              )}
            </div>
          </div>
        </nav>
      </header>

      <nav className="mobile-navigation d-block d-md-none">
        <div className="mobile-navigation-main">
          <div className="mobile-navigation-logo">
            <div className="logo">
              <Link to="/">
                <img
                  src="/images/Serve Biznes logo png.png"
                  alt="Serve Biznes Logo"
                  style={{ height: "45px" }}
                />
              </Link>
            </div>
          </div>
          {isAuthenticated ? (
            <Dropdown className="menu-dropdown account-dropdown">
              <DropdownButton
                className="  m-0 p-0 bg-none border-0"
                id="dropdownMenuButton"
                title={getUsernameBeforeAt()}
              >
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/changePassword">
                  Change Password
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          ) : (
            <span className="navbar-text ">
              <Link to="/signin" className="text-light text-decoration-none">
                Sign In
              </Link>
            </span>
          )}
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping text-light mx-3"></i>
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>

          <Button
            className="btn btn-light navigation-menu-link"
            onClick={toggleSideNav}
          >
            <i class="fa-solid fa-bars"></i>
          </Button>
        </div>
      </nav>
      <div className={`side-navigation ${isSideNavOpen ? "open" : ""}`}>
        <div className="side-navigation-header d-flex align-items-center justify-content-between">
          <h2 className="text-light fw-bold fs-1 mb-0">Menu</h2>
          <i
            class="fa-solid fa-circle-xmark text-light close-icon fs-1"
            onClick={toggleSideNav}
          ></i>
        </div>
        <ul className="side-navigation-menu">
          <li>
            <Link onClick={toggleSideNav} to="/home">
              Home
            </Link>
          </li>
          <li>
            <div className="nav-item dropdown w-100">
              <button
                className="nav-link dropdown-toggle w-100 d-flex align-items-center justify-content-between  p-3 "
                onClick={() => handleDropdownToggle("pret")}
              >
                Services
              </button>
              <ul
                className={`dropdown-menu ${
                  dropdownOpen === "pret" ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/business_writing"
                    onClick={toggleSideNav}
                  >
                    Business Writing
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/contentwriting"
                    onClick={toggleSideNav}
                  >
                    Content Writing
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/academicwriting"
                    onClick={toggleSideNav}
                  >
                    Academic Writing
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="nav-item dropdown w-100">
              <button
                className="nav-link dropdown-toggle w-100  d-flex  align-items-center justify-content-between p-3 "
                onClick={() => handleDropdownToggle("unstitched")}
              >
                About Us
              </button>
              <ul
                className={`dropdown-menu ${
                  dropdownOpen === "unstitched" ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/classofserve"
                    onClick={toggleSideNav}
                  >
                    About Serve Biznes
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/howitworks"
                    onClick={toggleSideNav}
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/sample"
                    onClick={toggleSideNav}
                  >
                    Sample
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/honorcode"
                    onClick={toggleSideNav}
                  >
                    Honor Code
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/blogs"
                    onClick={toggleSideNav}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/Faq's"
                    onClick={toggleSideNav}
                  >
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/contactus"
                    onClick={toggleSideNav}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={`overlay ${isSideNavOpen ? "show" : ""}`}
        onClick={toggleSideNav}
      ></div>
    </>
  );
};

export default Header;
