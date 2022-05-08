import React from 'react';
import './Header.css';
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="Header">
      {/* <h2>Home</h2> */}
      <Link activeClass="active" to="title" spy={true} smooth={true} offset={-70} duration={500} >
        <h2>Home</h2>
      </Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} >
        <h2>About</h2>
      </Link>
      <h2>Projects</h2>
      <h2>Resume</h2>
    </div>
  )
}

export default Header