import React from 'react';
import './Title.css';
import emoji from '../../assets/kaylieEmoji.png';

function Title() {
  return (
    <div className="Title">
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
      <img src={emoji} alt="emoji"/>
    </div>
  )
}

export default Title;