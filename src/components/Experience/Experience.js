import React from 'react';
import { Chrono } from 'react-chrono'
import './Experience.css';

const Experience = () => {
  const items = [{
    title: "June 2022",
    cardTitle: "Pegasystems",
    cardSubtitle:"Software Engineer Intern – Cloud-Native Runtime",
    cardDetailedText: "Develops resources that support microservices, internally used testing infrastructure, and related features. Participates in daily standup, sprints, and full agile process as part of a team of five software engineers. Utilizes Docker, Gradle, and Jenkins to build and implement tests"
  },
  {
    title: "January 2022",
    cardTitle: "Digital Applied Learning and Innovation (DALI) Lab",
    cardSubtitle: "Software Developer",
    cardDetailedText: "Collaborated closely with a team of four undergraduates to design, prototype, build and deploy a functioning app • Developed front and back-end logic for mobile applications using React, React-Native, and Redux",
  },
  {
    title: "May 1940",
    cardTitle: "Women in Computer Science",
    cardSubtitle:"Recruiting Chair",
    cardDetailedText: "blah blah blah",
  }];

    const theme = {
      primary: '#F88080',
      secondary: '#384D65',
      cardBgColor: '#F6F39D',
      cardForeColor: '#384D65',
      titleColor: '#F88080'

    }

    const fontSizes = {
      cardSubtitle: '1.3rem',
      cardText: '3rem',
      cardTitle: '2rem',
      title: '1.4rem',
    }

    return (
      <div className="Experience" id='experience' style={{flexDirection:"row"}}>
        
        <div id = 'content'>
          <h5 style={{marginLeft: "10%"}}>Experience</h5>
          <div className="chrono">
            <Chrono items={items} slideShow mode="VERTICAL" theme={theme} fontSizes={fontSizes} hideControls={true} lineWidth={5} activeItemIndex={-1} />
           </div>
        </div>
        <div className = 'rightContent'>
             <h2>Education</h2>
             <hr></hr>
             <h7>Dartmouth College - 2025</h7> <br/>
             <h7>Harvard Extention School</h7>
              <h2>Courses</h2>
              <hr></hr>
           </div>
      </div>
    )
  }

export default Experience;