import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <a href="/terms">Terms of Use</a>
      <span className="separator"></span>
      <a href="/privacy"> Privacy Policy</a>
    </div>
  );
}

export default Footer;
