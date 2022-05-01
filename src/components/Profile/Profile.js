import React from 'react';
import './Profile.css';
import profile from '../../assets/kaylieProfile.png';

function Profile() {
  return (
    <div className="Profile">
        <div className="imgContainer">
            <div className="profileBackground"/>
            <img src={profile} className="imgProfile" alt="profile"/>
        </div>
    </div>
  )
}

export default Profile;