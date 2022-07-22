import React from 'react';
import { Link } from "react-scroll";
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
        <div className="HeaderItem"> Kaylie Sampson (2022) </div>
        <Link activeClass="itemActive" to="experience" spy={true} smooth={true} offset={-70} duration={500} style={{color: 'FFFFFF'}}>
            <div className="HeaderItem"> Links </div>
        </Link>
        <a href={"https://github.com/kaylie-e-sampson/kayliesampson.me"} target="_blank" rel="noreferrer" className='HeaderItem' style={{color: 'white'}}>Source Code</a>
        {/* <Link activeClass="active" to="whyDali" spy={true} smooth={true} offset={-70} duration={500} >
            <div className="HeaderItem"> Resume </div>
        </Link> */}
    </div>
  )
}

export default Footer