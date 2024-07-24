import React from 'react'
import { BsMouse } from "react-icons/bs";
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import './landing.css'
import profile from '../../Images/myprofile.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/Kntoyyyy';
  };
  const handleGithubClick = () => {
    window.location.href = 'https://github.com/Kentoyyy';
  };

  const handleTwitterClick = () => {
    window.location.href = 'https://x.com/_KenAlcantara';
  };

  const handleLinkedinClick = () => {
    window.location.href = 'https://www.linkedin.com/in/ken-alcantara-9362b7288/';
  };
  return (
    <section id='landing'>
      <div className="landingContent">
        <span className="landinghello">Hi there!, 🤗 I&apos;m </span>
        <span className="landingText"><span className="introName">Ken Alcantara</span></span>
        <p className="landingPara">A Front-End Developer specialized in mobile development<br />with an interest in web development</p>

        <div className='socialMedia'>
          <div onClick={handleFacebookClick} style={{ cursor: 'pointer' }}>
            <BsFacebook style={{ color: '#fff' }} size={32} />
          </div>
          <div onClick={handleGithubClick} style={{ cursor: 'pointer', marginRight: '10px' }}>
            <BsGithub style={{ color: '#fff' }} size={32} />
          </div>
          <div onClick={handleTwitterClick} style={{ cursor: 'pointer', marginRight: '10px' }}>
            <BsTwitter style={{ color: '#fff' }} size={32} />
          </div>
          <div onClick={handleLinkedinClick} style={{ cursor: 'pointer' }}>
            <BsLinkedin style={{ color: '#fff' }} size={32} />
          </div>
        </div>
        <div className='scrollMouse'>
          <BsMouse size={32} />
          <span className='scrolltxt'>Scroll down to see more</span>

        </div>
      </div>
      <img src={profile} alt='Profile' className='profile' />
    </section>
  );
}

export default Intro;