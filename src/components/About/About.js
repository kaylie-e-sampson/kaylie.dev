import React from 'react';
import './About.css';
import Profile from "../Profile/Profile";

function About() {
  return (
    <div className="About" id="about">
      <Profile />
      <div className="Content">
          <h4>
            Who am I?-------------
          </h4>
        <h5>
          About Me
        </h5>
        <h7>
        Hello, world! <br/>
        My name is Kaylie Sampson, and I’m a Dartmouth ’25 from Ashland, New Hampshire.
        I’m currently pursuing a Computer Science major and a Digital Arts minor. <br/>
        Alongside my love for programming, I am passionate about making a difference in others lives. I take on many leadership roles to help foster 
        a community of collaboration and growth in the tech industry. As a first-generation student and woman in the field, I am also a strong advocate for mentorship and supporting underrepresented groups. 
        I find motivation in helping the people around me, and I aim to continue supporting others while navigating my journey in the tech world.
        </h7>
      </div>
    </div>
  )
}

export default About;