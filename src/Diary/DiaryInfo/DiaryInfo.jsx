import React from 'react';

function DiaryInfo(props){
    return(
        <div className="diaryInfo">
            <h1 className="diaryInfo__heading">{props.heading}</h1>
            <img className="diaryInfo__image" src={props.image} alt={props.image}/>
        </div>
    )
}

export default DiaryInfo