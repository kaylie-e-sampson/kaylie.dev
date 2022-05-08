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
            The best collaborative experience I have had has been working with the WISP team at DALI. Before coming to Dartmouth, 
            most of the coding experience I had was individual and self-taught, so being able to work with others on a project that 
            we all design and develop together was exciting. I also can’t describe how grateful I am to work with such amazing, 
            hardworking, passionate people. The other WISPees, mentors, and people I have met along the way have pushed me to do my 
            best, helped me when I needed it, and made me fall more in love with the DALI community. I have learned that I thrive in the 
             collaborative setting that DALI has set up and would take advantage of the opportunity to continue my time as a DALI member.
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