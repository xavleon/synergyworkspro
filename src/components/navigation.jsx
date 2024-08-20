import React from "react";
import { useRef } from "react";
import "../index.css";

export const Navigation = (props) => {
  const navCollapse = useRef(null); // 2. Create reference for collapse container

  const handleNavItemClick = () => {
    // 3. Function to handle item click
    if (window.innerWidth < 768) {
      navCollapse.current.classList.remove("in"); // Collapse the menu
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll navBar-responsive"
            href="#page-top"
          >
            <div class="logo">
              <img
                src="/img/logo.svg"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          ref={navCollapse} // 1. Add reference to collapse container
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#features"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
