import React from 'react';
import './header.css';
import WWvideo from '../assets/WWvideo1.mp4';
import logo from '../assets/background/ww-logo.webp';

export default function Header() {
    return (
      <>
        <header className="header">
            <div className="header-container">
                <h1 className="logo">
                    <img 
                    src={logo}
                    style={{height:"3vw"}}
                    />
                </h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#races">Races</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            
        </header>
        <div>
            <div className="video-container">
                <video width="100%" height="100%" controls={false} autoPlay muted style={{objectFit:"fill"}} loop >
                    <source src={WWvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
      </>
    );
}