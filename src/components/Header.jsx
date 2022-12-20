import React from "react";
import logo from ".././assets/logo.png"
const Header = () => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>
    </>
  );
};

export const NavContent = () => {
  return (
    <>
    <img src={logo} alt="logo"/>
      <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        <a href="#services">Services</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:mofijulhoque994@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
