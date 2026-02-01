import React from 'react';
import vision1 from '../assets/Vision1.jpg';
import vision2 from '../assets/Vision2.JPG';
import './vision.css';

const Vision = () => {
    return (
        <div className="vision">
             <h1 className='comp-title'>Our Vision</h1>
            <div className='vision-container row'>
              <div className='left-vision col-4'>
                <p>Building a community of 1M+ Warriors by 2040.</p>
                <p>FIT & HEALTHY community through engaging events centered around
Obstacle Course Racing and Running.</p>
                </div>  
            <div className='right-vision col-8'>
                <img src={vision1} alt="Vision 1" className='vision-img mb-2'/>
                <img src={vision2} alt="Vision 2" className='vision-img'/>

            </div>
            </div>
        </div>
    );
};

export default Vision;