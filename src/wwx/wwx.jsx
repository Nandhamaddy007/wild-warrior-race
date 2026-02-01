import React, { useState } from 'react';

import './wwx.css';

import wwx1 from '../assets/wwx/wwx-1.jpg';
import wwx2 from '../assets/wwx/wwx-2.jpg';
import wwx3 from '../assets/wwx/wwx-3.jpg';
import wwx4 from '../assets/wwx/wwx-4.jpg';
import wwx5 from '../assets/wwx/wwx-5.jpg';


export default function WWX() {
    const [images] = useState([
        wwx1,
        wwx2,
        wwx3,
        wwx4,
        wwx5,
    ]);

    return (
        <div className="races-container component-container" >
            <div>
                <h1 className='comp-title'>Wild Warrior X</h1>
            </div>
            <div className="slideshow-wrapper">
                <div className="slideshow">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`WWX ${index + 1}`}
                            className="slide-image-wwx"
                        />
                    ))}
                </div>
            </div>
            <div className='know-more-btn'>
               <a href="../wwx_ocr.pdf" target="_blank" >
                Know More
                </a>
            </div>
        </div>
    );
}