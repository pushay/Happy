import React from 'react';

function DiarySingleEntry(props){
    return(
        <div className="diarySingleEntry">
            <h1 className="diarySingleEntry__heading">
                {props.data.heading}
            </h1>
            <div className="diarySingleEntry__info">
                <span className="diarySingleEntry__info--span">{props.data.time}</span>
                <span className="diarySingleEntry__info--span">{props.data.calendar}</span>
            </div>
            <p className="diarySingleEntry__paragraph">
                {props.data.paragraph}
            </p>
        </div>
    )
}

export default DiarySingleEntry