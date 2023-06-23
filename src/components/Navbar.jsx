import React from "react";
import PageLinks from "../components/PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="nav-logo">Projects</h3>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <div className="nav-icons">
          KUN-FAGYAL Zoltán - Computer Science Engineering
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
