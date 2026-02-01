import React, { useState } from 'react';


export default function ObstacleInfra() {
    const [images] = useState([
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
    ]);

    return (
        <div className="races-container component-container" >
            <div>
                <h1 className='comp-title'>Obstable Infra</h1>
            </div>
            <div className="slideshow-wrapper">
                <div className="slideshow">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Race ${index + 1}`}
                            className="slide-image"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}