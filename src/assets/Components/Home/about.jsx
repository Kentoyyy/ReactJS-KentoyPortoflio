import React from 'react';
import './../Style/about.css';

const About = () => {
  return (
    <section className="about" id="Aboutme">
      <div className='aboutContainer'>
        <h2 className="aboutTitle">Who am I?</h2>
        <p className="aboutDesc">
          I'm Ken Alcantara a <span className="highlight"> a front-end developer specializing in web and full-stack mobile developer</span>. I'm currently taking a bachelor degree in <span className="highlight">Computer Science</span> with specialization in <span className="highlight">Machine Learning</span> at <span className="highlight">Cavite State University - Bacoor Campus</span>. Although my degree focuses on machine learning and artificial intelligence, my passion lies in <span className="highlight">mobile development, with a keen interest in web development.</span>.
        </p>
        <p className="aboutDesc">
        I began my programming journey during my Senior High School year at<span className="highlight">STI College - Lipa</span> taking <span className="highlight">Information, Communication and Technology strand</span>. I was taught Web Development (HTML, CSS, JavaScript) and Native Mobile App Development (Java - Android Studio). 
        </p>
      </div>
    </section>  
  );
}

export default About;
