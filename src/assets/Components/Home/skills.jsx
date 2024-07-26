import React from 'react'
import { BsPhone, BsGlobe, BsWindow } from "react-icons/bs";
import './../Style/skills.css'

const techstack = () => {
  return (
    <section id='skills'>
      <span className="skillTitles">What i can do?</span>
      <span className="skillDescription">Do I need to define and explain it? You can see my skills in my recent work.</span>
      <div className='skillList'>
        <div className="myskills">
          <BsWindow size={52} className="skillWindow" />
          <div className='myskillText'>
            <h2>WEBSITES</h2>
            <p>I can assist with the front-end development of your website to ensure it looks great and functions smoothly.</p>
          </div>
        </div>
        <div className="myskills">
          <BsGlobe size={52} className="skillWeb" />
          <div className='myskillText'>
            <h2>WEB APPS</h2>
            <p>I can help with the front-end development of your website, making sure it’s both visually appealing and functional.</p>
          </div>
        </div>
        <div className="myskills">
          <BsPhone size={52} className="skillPhone" />
          <div className='myskillText'>
            <h2>MOBILE APPS</h2>
            <p>f your target audience is mobile phone users or if you need a basic app for your business, I can provide a cross-platform solution. 📱</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default techstack