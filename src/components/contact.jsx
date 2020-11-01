import React from "react";
import profile from "../images/profile.jpeg";
function Contact() {
  return (
    <div className="contact">
      <img src={profile} alt="Screenshot of website"></img>
      <a> 020 413 76057</a>
      <a>b.ackerman@windowslive.com</a>
      <div className="contact-buttons">
        <a href="https://www.linkedin.com/in/beth-ackerman-ab112b158/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://dev.to/betheackers">
          <i className="fab fa-dev"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
