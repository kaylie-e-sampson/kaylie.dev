import React, { useEffect } from 'react';
import './Title.css';
import emoji from '../../assets/kaylieEmoji.png';
import { config } from 'react-spring'
import ReactTextTransition from "react-text-transition";

const TEXTS = [
  "and waterskiier. 🏄‍♀️",
  "and tree-hugger. 🌲",
  "and weightlifter. 🏋️‍♀️",
  "and optimist. 🥛"
];

const Title = () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div id="title" className="Title">
      <div>
        <h4>
          Hey there 👋, I'm
        </h4>
        <h1>
          Kaylie <br/>
          Sampson
        </h1>
        <h3>
          I'm a developer, student <br />
          <ReactTextTransition
          text={ TEXTS[index % TEXTS.length] }
          springConfig={ config.default }
        />
        </h3>
      </div>
      <div className="Emoji">
        <img src={emoji} alt="emoji"/>
      </div>
    </div>
  );
}

export default Title;
