import React from "react";
import resume from "../images/Niccolo-Eck-Resume.pdf";

function Footer() {
  return (
    <footer id="contact-me">
      <h2>Contact me</h2>
      <p>
        <a href="mailto:nicco.eck@gmail.com">nicco.eck@gmail.com</a>
      </p>
      <p>619-219-9214</p>
      <p>
        <a href={resume} download="Niccolo-Eck-Resume">
          Resume
        </a>
      </p>
    </footer>
  );
}

export default Footer;
