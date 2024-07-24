import React from 'react'
import './intro.css'
import profile from '../../Images/kprofile.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hi there!, I'm </span>
        <span className="introText"><span className="introName">Ken Alcantara</span></span>
        <p className="introPara">A Front-End Developer specialized in mobile development<br></br>with an interest in web development.</p>


      </div>
      <img src={profile} alt='Profile' className='profile' />
    </section>
  );
}

export default Intro 