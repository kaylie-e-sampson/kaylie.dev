import React from 'react';
import './Header.css';
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="Header">
      <Link activeClass="active" to="title" spy={true} smooth={true} offset={-70} duration={500} >
        <div className="HeaderItem"> Home </div>
      </Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} >
        <div className="HeaderItem"> About </div>
      </Link>
      <Link activeClass="active" to="whyDali" spy={true} smooth={true} offset={-70} duration={500} >
        <div className="HeaderItem"> Why DALI? </div>
      </Link>
    </div>
  )
}

export default Header