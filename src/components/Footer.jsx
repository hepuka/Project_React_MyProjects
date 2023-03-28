import React from "react";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <p className="copyright">
        copyright &copy; Zoltan KUN-FAGYAL
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
