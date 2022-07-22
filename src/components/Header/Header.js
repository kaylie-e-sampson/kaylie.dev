import React from 'react';
import './Header.css';
import { Link } from "react-scroll";
import pdf from "../../assets/Kaylie_Sampson.pdf"

function Header() {
  return (
    <div className="Header">
      <Link activeClass="itemActive" to="title" spy={true} smooth={true} offset={-70} duration={500} style={{color: 'FFFFFF'}}>
        <div className="HeaderItem"> Home </div>
      </Link>
      <Link activeClass="itemActive" to="about" spy={true} smooth={true} offset={-70} duration={500} style={{color: 'FFFFFF'}}>
        <div className="HeaderItem"> About </div>
      </Link>
      <Link activeClass="itemActive" to="experience" spy={true} smooth={true} offset={-70} duration={500} style={{color: 'FFFFFF'}}>
        <div className="HeaderItem"> Experience </div>
      </Link>
      <Link activeClass="itemActive" to="projects" spy={true} smooth={true} offset={-70} duration={500} style={{color: 'FFFFFF'}}>
        <div className="HeaderItem"> Projects </div>
      </Link>
      <a href={pdf} target="_blank" rel="noreferrer" className='HeaderItem' style={{color: 'white'}}>Resume</a>
      {/* <Link activeClass="active" to="whyDali" spy={true} smooth={true} offset={-70} duration={500} >
        <div className="HeaderItem"> Resume </div>
      </Link> */}
    </div>
  )
}

export default Header