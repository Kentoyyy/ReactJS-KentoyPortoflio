import React from 'react'
import './intro.css'
import profile from '../../Images/profile.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introname">Ken</span><br />Font end Developer</span>


      </div>
    </section>
  );
}

export default Intro 