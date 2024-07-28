import React from 'react';
import './../Style/techstack.css';
import { FaArrowRight } from 'react-icons/fa';
import tecHTML from '../../Images/html.png'
import techCSS from '../../Images/css.png'
import techJavascript from '../../Images/javascript.png'
import techTensorflow from '../../Images/tensorflow.png'
import techPython from '../../Images/python.png'
import techPytorch from '../../Images/pytorch.png'

const techstack = () => {
  return (
    <section className="tech">
      <div className='techContainer'>
        <h2 className="techTitle">Tech Stack</h2>
        <p className="techDesc">Technologies that I have been working with, in <br></br> personal projects and freelancing.<br></br><span className="underText">Under Development🚧🛠️</span></p>
      </div>
      <div className="techSkillContainer">
        <div className="techBox">
          <h3 className="techBoxTitle">WEB / MOBILE</h3>
          <div className="techIcons">
            <img src={tecHTML} alt="Python" />
            <img src={techCSS} alt="PyTorch" />
            <img src={techJavascript} alt="TensorFlow" />

          </div>
          <div className="seeMore">
            <span>See more</span>
            <FaArrowRight />
          </div>
        </div>
        <div className="techBox">
          <h3 className="techBoxTitle">ML / AI</h3>
          <div className="techIcons">
            <img src={techTensorflow} alt="Python" />
            <img src={techPython} alt="PyTorch" />
            <img src={techPytorch} alt="TensorFlow" />

          </div>
          <div className="seeMore">
            <span>See more</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default techstack;
