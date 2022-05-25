import React from "react";
import profilePic from "../images/professional-photo.jpg";

function Main() {
  return (
    <section className="sub-section" id="about-me">
      <div className="information">
        <h2>About Me</h2>
        <p>
          My name is Niccolo Eck, and I have completed a Full Stack Bootcamp
          through UCSD. I have a wide range of knowledge including but not
          limited to HTML, CSS, JavaScript, Node.js MySQL, MongoDB, GraphQL,
          APIs, and MERN.
        </p>
      </div>
      <div className="photo-container">
        <img className="photo" src={profilePic} alt="profile of nicco" />
      </div>
    </section>
  );
}

export default Main;
