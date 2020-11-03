import React from 'react';
import Section from '../Components/Secton/Section';
import SectionText from '../Components/Secton/SectionText';
import notebook from '../Assets/notebook.jpg';
import meditate from '../Assets/meditate.jpg';
import inspired from '../Assets/inspired.jpg';
import Button from '../Components/Button/Button';

function Home(props){
    return(
        <div className="home">
            <Section styles="center" design="center" color="white" photo1='' text="Start now" start="yes" section={SectionText.Text[0]}/>
            <Section color="black"  photo1={notebook}  start="no" section={SectionText.Text[1]} />
            <Section color="black"  photo1={meditate}  start="no" section={SectionText.Text[2]}/>
            <Section color="black"  photo1={inspired}  start="no" section={SectionText.Text[3]}/>
            <Button text="Go up" end="yes"/>
        </div>
    )
}

export default Home