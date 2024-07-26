import React from 'react';
import { BsWindow, BsGlobe, BsPhone } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import './../Style/skills.css'

const MySkills = () => {
  return (
    <div className="skillsSection">
      <div className="skillTitleContainer">
        <h1 className='skillTitle'>What I Can Do?</h1>
        <p className='skillSubtitle'>I don't need to explain my skills;<br></br>  you can see them in my recent works <a href="/recent-works" className='recentWorksLink'>recent works</a>. 😊</p>
      </div>
      <div className="skillsContainer">
        <div className="myskills">
          <BsWindow color='#fff' size={24} className="skillIcon" />
          <div className='myskillText'>
            <h2>WEBSITES</h2>
            <p>Lorem ipsum dolor sit amet. Et autem praesentium qui magnam ducimus vel sequi reprehenderit. Aut sint quos qui provident quis eos pariatur ipsam ea fuga sequi. Et cumque sequi sit error repudiandae aut suscipit nesciunt est quia asperiores non excepturi eaque. Est rerum consequatur sed voluptas nobis qui nihil ipsam.</p>
          </div>
        </div>
        <div className="myskills">
          <BsGlobe color='#fff' size={24} className="skillIcon" />
          <div className='myskillText'>
            <h2>WEB APPS</h2>
            <p>Lorem ipsum dolor sit amet. Et autem praesentium qui magnam ducimus vel sequi reprehenderit. Aut sint quos qui provident quis eos pariatur ipsam ea fuga sequi. Et cumque sequi sit error repudiandae aut suscipit nesciunt est quia asperiores non excepturi eaque. Est rerum consequatur sed voluptas nobis qui nihil ipsam.</p>
          </div>
        </div>
        <div className="myskills">
          <BsPhone color='#fff' size={24} className="skillIcon" />
          <div className='myskillText'>
            <h2>MOBILE APPS</h2>
            <p>Lorem ipsum dolor sit amet. Et autem praesentium qui magnam ducimus vel sequi reprehenderit. Aut sint quos qui provident quis eos pariatur ipsam ea fuga sequi. Et cumque sequi sit error repudiandae aut suscipit nesciunt est quia asperiores non excepturi eaque. Est rerum consequatur sed voluptas nobis qui nihil ipsam.</p>
          </div>
        </div>
        <div className="myskills">
          <FaShareAlt color='#fff' size={24} className="skillIcon" />
          <div className='myskillText'>
            <h2>ML/AI</h2>
            <p>Lorem ipsum dolor sit amet. Et autem praesentium qui magnam ducimus vel sequi reprehenderit. Aut sint quos qui provident quis eos pariatur ipsam ea fuga sequi. Et cumque sequi sit error repudiandae aut suscipit nesciunt est quia asperiores non excepturi eaque. Est rerum consequatur sed voluptas nobis qui nihil ipsam.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
