import React from 'react';
import './About.css';
import Profile from "../Profile/Profile";

function About() {
  return (
    <div className="Profile">
      <Profile />
      <div>
        <h4>
          Hey there 👋, I’m
        </h4>
        <h1>
          Kaylie <br/>
          Sampson
        </h1>
        <h3>
          I'm a developer, student <br />
          and waterskiier.
        </h3>
      </div>
    </div>
  )
}

export default About;