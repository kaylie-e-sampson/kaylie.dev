import React from 'react';
import { Chrono } from 'react-chrono'
import './Experience.css';

const Experience = () => {
  const items = [{
    title: "May 1940",
    cardTitle: "Pegasystems",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      }
      }];

    const theme = {
      primary: '#F88080',
      secondary: '#54677D',
      cardBgColor: '#F6F39D',
      cardForeColor: '#54677D',
      titleColor: '#F88080',
      titleCoverActive: '#54677D'
    }

    const fontSizes = {
      cardSubtitle: '0.9rem',
      cardText: '0.8rem',
      cardTitle: '2rem',
      title: '1rem',
    }

    return (
      <div  id ='experience' style={{  height: '1500px', paddingRight:60, }}>
          <Chrono className="experiences" items={items} slideShow mode="VERTICAL" theme={theme} fontSizes={fontSizes} hideControls={true} lineWidth={5} activeItemIndex={-1} />
      </div>
    )
  }

export default Experience;