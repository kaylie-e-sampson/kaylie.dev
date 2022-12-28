import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
        <div className="FooterItem"> Kaylie Sampson (2022) </div>
        <div className="SocialIcons">
          <SocialIcon url="mailto:kksamps2@gmail.com" network="mailto" fgColor='white' bgColor="#54677D" style={{ height: 70, width: 70 }}></SocialIcon>
          <SocialIcon url="https://github.com/kaylie-e-sampson" network="github" fgColor='white' bgColor="#54677D" style={{ height: 70, width: 70 }}></SocialIcon>
          <SocialIcon url="https://www.linkedin.com/in/kaylie-e-sampson" network="linkedin" fgColor='white' bgColor="#54677D" style={{ height: 70, width: 70 }}></SocialIcon>
        </div>
        <a href={"https://github.com/kaylie-e-sampson/kayliesampson.me"} target="_blank" rel="noreferrer" className='HeaderItem' style={{color: 'white'}}>Source Code</a>
    </div>
  )
}

export default Footer