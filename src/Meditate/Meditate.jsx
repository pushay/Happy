import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import BreatheIn from '../Meditate/BreatheIn/BreatheIn';
import sky from '../Assets/sky.jpg';
import raining from '../Assets/raining.jpg'
import Sounds from './Sounds/Sounds';

 
function Meditate(){

    const [buttonName, setButtonName] = useState('Go to Breathe in mode');
    const [background, setBackground] = useState(raining)

    const changeModeHandler = () => {
        if (buttonName == 'Go to Breathe in mode') {
            setButtonName('Go to relax mode')
            return
        }
        if (buttonName == 'Go to relax mode') {
            setButtonName('Go to Breathe in mode')
            return
        }
    }

    if (buttonName === 'Go to Breathe in mode'){
    return(
        <div className="meditate" style={{backgroundImage:`url(${background})`, backgroundPosition:'center'}}>
            <Button text="Go to Breathe in mode" onClick={changeModeHandler} mode={{ text: buttonName}}/>
            <Sounds changeBackground={setBackground}/>
        </div>
    )
}

else {
    return(
        <div className="meditate" style={{backgroundImage:`url(${sky})`, backgroundPosition:'bottom'}}>
            <Button text="Go to relax mode" onClick={changeModeHandler} mode={{ text: buttonName}}/>
            <BreatheIn/>
        </div>
    )
}
}
export default Meditate