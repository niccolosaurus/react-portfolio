import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar({buttonText, title}) {
  return (
    <nav>
    <ul id="nav-list">
        <li><a href="#about-me">About me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact-me">Contact</a></li>
    </ul>
    <button class="hamburger" id="hamburger">
        <GiHamburgerMenu />
    </button>
</nav>
  );
}

export default Navbar;
