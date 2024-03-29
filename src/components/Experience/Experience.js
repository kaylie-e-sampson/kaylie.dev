import React from 'react';
import { Chrono } from 'react-chrono'
import './Experience.css';

const Experience = () => {
  const experienceItems = [
    {
      title: "Jun 2023 - Present",
      cardTitle: "Amazon Web Services",
      cardSubtitle: "Software Engineer Intern",
      cardDetailedText: "As a member of the AWS Aurora team, I am developing a protocol state machine in Rust that will keep track of the state of PostgreSQL protocol messages and allow for the registration of additional actions alongside the communcation between the server and client"
    },{
    title: "Jan 2022 - Present",
    cardTitle: "Digital Applied Learning and Innovation (DALI) Lab",
    cardSubtitle: "Software Developer, Mentor",
    cardDetailedText: "As a development mentor in the lab, I collaborate with designers and other developers to produce frontend and backend logic for mobile applications using React, React-Native, and Redux. I also move DALI developers forward by encouraging quality work, developing better systems and resources, and providing mentorship"
  },
  {
    title: "Jan 2023 - Mar 2023",
    cardTitle: "Dartmouth Computer Science Department",
    cardSubtitle:"Teaching Assistant",
    cardDetailedText: "As a teaching assistant for CS1 (Introduction to Programming and Computation), I lead groups of students in weekly meetings to reinforce fundamental concepts and teach new ideas. I also provide guidance and mentorship throughout the term to students struggling with class concepts and programming labs"
  },
    {
    title: "Jun 2022 - September 2022",
    cardTitle: "Pegasystems",
    cardSubtitle:"Software Engineer Intern",
    cardDetailedText: "As a member of the Cloud-Native Runtime team, I developed resources that support microservices, internally used testing infrastructure, and related features, participated in daily standup, sprints, and full agile process as part of a team of five software engineers, and utilized Docker, Gradle, and Jenkins to build and implement tests"
  },
  {
    title: "Mar 2023 - Present",
    cardTitle: "Women in Computer Science",
    cardSubtitle: "President",
    cardDetailedText: "As a co-president of the club, I am responsible for overseeing the planning and execution of initiatives to create a community of women interested in computer science and technology. I do so by managing a team of officers, delegating responsibilities, and providing guidance to ensure the smooth operation of the organization and successful execution of projects" 
  },
  {
    title: "Jun 2022 - Present",
    cardTitle: "Rewriting the Code",
    cardSubtitle:"Student Council Peer Leader",
    cardDetailedText:"As a student leader, I Amplify the voice and values of first-year/sophomore undergraduate women studying computer science, serve as an active contributor concerning policies or actions adopted by RTC, and participate in leadership learning workshops as part of the RTC Rising Leader Institute",
  },
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
          <h8>National Center for Women and Informational Technology</h8><br></br><h8><em>Member</em></h8><br></br><br></br>
          <h8>HackDartmouth</h8><br></br><h8><em>Developer & Career Hub Contributor</em></h8><br></br><br></br>
          <h8>Women in Computer Science</h8><br></br><h8><em>President</em></h8><br></br><br></br>
          <h8>CoderDojo</h8><br></br><h8><em>Member</em></h8><br></br><br></br>
        </div>
      </div>
    )
  }

export default Experience;