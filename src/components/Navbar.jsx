import React from "react";
import PageLinks from "../components/PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="nav-logo">My Projects</h3>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <div className="nav-icons">kereső komponens ide</div>
      </div>
    </nav>
  );
};

export default Navbar;
