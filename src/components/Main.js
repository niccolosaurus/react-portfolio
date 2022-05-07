import React from "react";
import profilePic from "../images/professional-photo.jpg";

function Main() {
  return (
    <section className="sub-section" id="about-me">
      <div className="information">
        <h2>About Me</h2>
        <p>
          My name is Niccolo Eck, and I am currently going through a full stack
          boot camp from UCSD. I am able to work with and use HTML, CSS JS, and React.js on the front end, and for the backend I know Node.js, APIs, Express, SQL, and MongoDB.  
        </p>
      </div>
      <div className="photo-container">
        <img className="photo" src={profilePic} alt="profile of nicco"/>
      </div>
    </section>
  );
}

export default Main;