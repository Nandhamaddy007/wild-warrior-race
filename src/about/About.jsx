import React from 'react';
import './About.css';

import arun from "../assets/founders/arun.webp";
import somdev from "../assets/founders/somdev.webp";
import varun from "../assets/founders/varun.webp";
import vikram from "../assets/founders/vikram.webp";

import map from "../assets/indiaMap.png";

export default function About() {

    const founders=[
    {
        name:"VIKRAM 'BULLSHARK' MENON",
        image:vikram,
        details:"Co-Founder – Wild Warrior",
        link: " https://www.linkedin.com/in/vikram-menon-599827239/"
    },
    {
        name:"SOMDEV DEVVARMAN",
        image:somdev,
        details:"Former Indian No. 1. Padma Shri (2018) and Arjuna (2017) Awardee",
        link:"https://en.wikipedia.org/wiki/Somdev_Devvarman"
       
    },
    {
        name:"VARUN GUNASEELAN",
        image:varun,
        details:"Running and Adventure sports enthusiast, climbed over 60 mountain peaks. Co-Chair of CII Sports & Fitness Summit 2020 & 2021",
        link:"https://www.linkedin.com/in/varun-g-84b40227/"
    },
    {
        name:"ARUN KARTHIK",
        image:arun,
        details:"12+ years in Sports Management & Grassroots Development",
        link:"https://www.linkedin.com/in/karunkarthik/"
    }
]
    return (
        <div className='component-container'>
            <h1 className='comp-title'>OUR STORY</h1>
            <div className='our-story-container'>
            <div className='map-container'>
            <img src={map} alt="India Map" style={{height:"84vh"}} />

            </div>
            <div className='story-text-container'>
            <div className='our-story-title'>
                India's coolest fitness racing company
            </div>
            <div className='accomplishments'>
            <div>
                10 cities
            </div>
            <div>
                73 
               races organized
            </div>
            <div>
                21K+  Participants
            </div>
            <div>
                32K+ Spectators
            </div>

            </div>
            <div className='about-description'>
                Created by adventure enthusiasts in Chennai, Wild Warrior Race has been hosting world-class adventure experiences across India and SouthEast Asia since 2018.
            </div>
            </div>

            </div>
            <div className='founders-container'>
            <h2 className='comp-title'>MEET THE FOUNDERS</h2>
            <div className='founders-cards row w-100 m-1'>
                {founders.map((founder, index)=>(
                    <div className='col-3' key={index}>
                        <div className='founder-card'>
                        <img src={founder.image} alt={founder.name} className='founder-image' />
                        <h5 className='founder-name'>{founder.name}</h5>
                        <p className='founder-details'>{founder.details}</p>

                    </div>
                    </div>
                ))}
            <div>

            </div>

            </div>
        </div>
        </div>
    );
}