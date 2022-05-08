import React from 'react';
import './WhyDali.css';
import wisp from '../../assets/WISP.png';

function WhyDali() {
  return (
    <div className="WhyDali" id="whyDali">
        <div className="Description">
            <h5 style={{lineHeight:1.5}}>
            Why DALI?
            </h5>
            <h7>
                DALI WISP has been a great experience.
            </h7>
        </div>
        <div className="imgContainer">
            <div className="wispBackground" />
            <img src={wisp} className="imgWISP" alt="wisp"/>
        </div>
    </div>
  )
}

export default WhyDali;