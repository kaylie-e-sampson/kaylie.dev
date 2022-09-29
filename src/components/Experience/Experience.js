import React from 'react';
import { Chrono } from 'react-chrono'
import './Experience.css';

const Experience = () => {
  const experienceItems = [{
    title: "Jan 2022 - Present",
    cardTitle: "Digital Applied Learning and Innovation (DALI) Lab",
    cardSubtitle: "Software Developer",
    cardDetailedText: "As a developer in the lab, I collaborate closely with a team of four undergraduates to design, prototype, build and deploy a functioning app and develop front and back-end logic for mobile applications using React, React-Native, and Redux"
  },
    {
    title: "Jun 2022 - September 2022",
    cardTitle: "Pegasystems",
    cardSubtitle:"Software Engineer Intern",
    cardDetailedText: "As a member on the Cloud-Native Runtime team, I developd resources that support microservices, internally used testing infrastructure, and related features, participated in daily standup, sprints, and full agile process as part of a team of five software engineers, and utilized Docker, Gradle, and Jenkins to build and implement tests"
  },
  {
    title: "Jun 2022 - Present",
    cardTitle: "Rewriting the Code",
    cardSubtitle:"Student Council Peer Leader",
    cardDetailedText:"As a student leader, I Amplify the voice and values of first-year/sophomore undergraduate women studying computer science, serve as an active contributor concerning policies or actions adopted by RTC, and participate in leadership learning workshops as part of the RTC Rising Leader Institute",
  },
  {
    title: "Jan 2022 - Jun 2022",
    cardTitle: "Women in Computer Science",
    cardSubtitle: "Recruiting Chair",
    cardDetailedText: "As a member of the executive board, I conduct meetings for recruiting preparation, technical interview practice, and organize interview workshops. I also manage relationships with company recruiters and the Center of Professional Development at Dartmouth" 
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
          <h5 className="title" >Experience</h5>
          <div className="chrono">
            <Chrono items={experienceItems} slideShow mode="VERTICAL" theme={theme} fontSizes={fontSizes} hideControls={true} lineWidth={5} activeItemIndex={-1} useReadMore={false} />
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
          <h8>HackDartmouth</h8><br></br><h8><em>Career Hub Contributor</em></h8><br></br><br></br>
          <h8>Women in Computer Science</h8><br></br><h8><em>Recruiting Chair</em></h8><br></br><br></br>
          <h8>CoderDojo</h8><br></br><h8><em>Member</em></h8><br></br><br></br>
        </div>
      </div>
    )
  }

export default Experience;