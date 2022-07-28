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
        I’m currently pursuing a Computer Science major modified with Digital Arts and a minor in Human-Centered Design. <br/>
        In the past years, I have learned that the potential for computer programming is limitless, and my goal is to be involved in the finding of 
        new discoveries that at first seem unreachable. Whether it be designing a robot smarter than that of the human brain, developing applications to be used worldwide, or becoming an experienced hacker in order 
        to outsmart other hackers in the world of cybersecurity, the options are endless. But in order for me to reach such dreams, I must continue my journey by immersing myself in new languages, from “Hello, World” to mastery of the syntax, and seeing where it takes me. <br /> 
        I am motivated to go above and beyond in the opportunities given to me, and strengthen my talent in the CS field.
        </h7>
      </div>
    </div>
  )
}

export default About;