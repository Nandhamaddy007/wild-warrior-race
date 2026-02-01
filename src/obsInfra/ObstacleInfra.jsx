import React, { useState } from 'react';

import infra from '../assets/obsInfra/InfraImage.jpg';
import infra1 from '../assets/obsInfra/InfraImage1.jpg';
import infra2 from '../assets/obsInfra/InfraImage2.jpg';
import infra3 from '../assets/obsInfra/InfraImage3.jpg';
import infra4 from '../assets/obsInfra/InfraImage4.jpg';
import infra5 from '../assets/obsInfra/InfraImage5.jpg';




export default function ObstacleInfra() {

    const images=[infra, infra1, infra2, infra3, infra4, infra5];


    return (
        <div className="races-container component-container" >
            <div>
                <h1 className='comp-title'>Obstacle Infrastructure</h1>
            </div>
            <div className="slideshow-wrapper">
                <div className="slideshow">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Obstacle Infrastructure ${index + 1}`}
                            className="slide-image-wwx"
                        />
                    ))}
                </div>
            </div>
            <div className='know-more-btn'>
               <a href="../wwx__infra.pdf" target="_blank" >
                Know More
                </a>
            </div>
        </div>
    );
}