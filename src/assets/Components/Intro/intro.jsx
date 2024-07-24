import React from 'react'
import './intro.css'
import profile from '../../Images/kprofile.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Ken</span><br />Font end Developer</span>
        <p className="introPara">I am a skilled </p>


      </div>
      <img src={profile} alt='Logo' className='logo' />
    </section>
  );
}

export default Intro 