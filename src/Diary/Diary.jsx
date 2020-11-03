import React, { useState } from 'react';
import Navigation from '../Layout/Navigation/Navigation';
import NavigationText from '../Layout/Navigation/NavigationText';
import DiaryEntries from './DiaryEntries/DiaryEntries';
import DiaryNewOne from './DiaryNewOne/DiaryNewOne';


function Diary(props){

    const [action, setAction] = useState('add a new one')

    const diary = {display:'flex',padding: '0.6rem 0', justifyContent:'center', width: '100%vh',backgroundColor:'#F5F4F3'}

    const choosingAction = () => {
        if (action == 'add a new one') {
            return <DiaryNewOne />}
        if (action == 'entries') {
            return <DiaryEntries />}
    }

    return(
        <div className="diary">
            <Navigation style={diary}  diary="yes" links="no" funct={setAction} nav={NavigationText.SecondaryNavigation}/>
            {choosingAction()}
        </div>
    )
}


export default Diary
