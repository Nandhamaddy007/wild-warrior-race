import React, { useState } from 'react';
import './Races.css';

import { Dialog } from 'primereact/dialog';
        

import race1 from '../assets/upcomingRaces/race1.jpg';
import race2 from '../assets/upcomingRaces/race2.jpg';

export default function Races() {
    const [images] = useState([
        race2
    ]);
    const popupImages = {
        0:[race1, race2]
    }
    const [selectedRace, setSelectedRace] = useState(null);
    const [visible, setVisible] = useState(false);

    return (
        <div className="races-container component-container" >
            <div>
                <h1 className='comp-title'>Upcoming Races</h1>
            </div>
            <div className="slideshow-wrapper">
                <div className="slideshow-race">
                    {images.map((image, index) => (
                        <div onClick={()=>{
                            setSelectedRace(index)
                        }}>
                            <img
                            key={index}
                            src={image}
                            alt={`Race ${index + 1}`}
                            className="slide-image-race"
                            onClick={()=>setVisible(true)}
                        />
                        </div>
                    ))}
                </div>
            </div>
            {
                selectedRace !== null && <DialogDemo visible={visible} setVisible={setVisible} popupimages={popupImages[selectedRace]} />
            }
        </div>
    );
}

function DialogDemo({visible, setVisible, popupimages}) {
    

    return (
        <div>
            
            <Dialog 
            className='race-popup'
            visible={visible} 
            onHide={() => setVisible(false)}>
                <div className='race-body'>
                    {popupimages.map((img, idx) => (
                        <img key={idx} src={img} alt={`Popup ${idx + 1}`} className="popup-image" />
                    ))}

                </div>
            </Dialog>
        </div>
    );
}