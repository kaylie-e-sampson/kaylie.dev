import React from 'react';
import { Chrono } from 'react-chrono'
import './Experience.css';

const Experience = () => {
  const experienceItems = [{
    title: "Jun 2022 - Present",
    cardTitle: "Pegasystems",
    cardSubtitle:"Software Engineer Intern",
    cardDetailedText: "Develops resources that support microservices, internally used testing infrastructure, and related features. Participates in daily standup, sprints, and full agile process as part of a team of five software engineers. Utilizes Docker, Gradle, and Jenkins to build and implement tests"
  },
  {
    title: "Jun 2022 - Present",
    cardTitle: "Rewriting the Code",
    cardSubtitle:"Student Council Peer Leader",
    cardDetailedText:"Amplifies the voice and values of first-year/sophomore undergraduate women studying computer science. Serves as an active contributor concerning policies or actions adopted by RTC. Participates in leadership learning workshops as part of the RTC Rising Leader Institute",

  },
  {
    title: "Jan 2022 - Present",
    cardTitle: "Digital Applied Learning and Innovation (DALI) Lab",
    cardSubtitle: "Software Developer",
    cardDetailedText: "Collaborated closely with a team of four undergraduates to design, prototype, build and deploy a functioning app • Developed front and back-end logic for mobile applications using React, React-Native, and Redux",
  },
  {
    title: "Jan 2022 - Jun 2022",
    cardTitle: "Women in Computer Science",
    cardSubtitle: "Recruiting Chair",
    cardDetailedText: "Conducts meetings for recruiting preparation, technical interview practice, and organized interview workshops. Managed relationships with company recruiters and the Center of Professional Development at Dartmouth" 
  }
  ];

    const theme = {
      primary: '#F88080',
      secondary: '#384D65',
      cardBgColor: '#F6F39D',
      cardForeColor: '#384D65',
      titleColor: '#F88080'

    }

    const fontSizes = {
      cardSubtitle: '1.5rem',
      cardText: '10rem',
      cardTitle: '1.8rem',
      title: '1.3rem',
    }

    return (
      <div className="Experience" id='experience' style={{flexDirection:"row"}}>
        
        <div id = 'content'>
          <h5 style={{marginLeft: "10%"}}>Experience</h5>
          <div className="chrono">
            <Chrono items={experienceItems} slideShow mode="VERTICAL" theme={theme} fontSizes={fontSizes} hideControls={true} lineWidth={5} activeItemIndex={-1} />
           </div>
        </div>
        <div className = 'rightContent'>
          <h2>Education</h2>
          <h8>Dartmouth College, <br></br><em>Hanover NH</em></h8><br/>
          <h8>Bachelor of Computer Science (2021-2025)</h8> <br/> <br/>
          <h8>Harvard Extention School, <br></br><em>Cambridge MA</em></h8> <br/>
          <h8>Summer 7-week program (2020)</h8> <br/>
          <h2>Organizations</h2>
          <h8>Rewriting the Code</h8><br></br><h8><em>Student Leader</em></h8><br></br><br></br>
          <h8>NCWIT</h8><br></br><h8><em>Campus Representative</em></h8><br></br><br></br>
          <h8>Women in Computer Science</h8><br></br><h8><em>Recruiting Chair</em></h8><br></br><br></br>
          <h8>CoderDojo</h8><br></br><h8><em>Member</em></h8><br></br><br></br>
        </div>
      </div>
    )
  }

export default Experience;