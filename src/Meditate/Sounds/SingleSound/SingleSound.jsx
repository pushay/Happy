import React, { useState } from 'react';
import relax from '../../../Assets/relax.jpg';
import waves from '../../../Assets/waves.jpg';
import soap from '../../../Assets/soap.jpg';
import night from '../../../Assets/night.jpg';
import raining from '../../../Assets/raining.jpg'

function SingleSound(props){

    const changeBackground = (music) => {   
        if (music == '/static/media/sea.ee85739a.mp3') {
            props.setBackground(waves)
        }
        if (music == '/static/media/rain.8f2ec4e9.mp3') {
            props.setBackground(raining)
        }
        if (music == '/static/media/night.4ad03eb9.mp3') {
            props.setBackground(night)
        }
        if (music == '/static/media/soap.10cffa76.mp3') {
            props.setBackground(soap)
        }
        if (music == '/static/media/relax.53794f0d.mp3') {
            props.setBackground(relax)
        }
    }

    return(
        <div className="singleSound">
            <img onClick={()=>{props.turnMusic(props.music); changeBackground(props.music)}} className="singleSound__image" src={props.image}/>
        </div>
    )
}

export default SingleSound