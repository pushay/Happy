import React from 'react';

function TextBlock(props){
    return(
        <div style={{textAlign:props.design === 'center' ? 'center' : '', display:props.empty === 'yes' ? 'none' : '', width:props.design === 'bookMark' ? '500px' : '',  padding:props.design === 'bookMark' ? '1rem 1rem' : ''}} className="textBlock">
            <h1 style={{color:props.color === 'white' ? '#fff' : '$color-text', fontSize:props.color === 'white' ? '2.6rem' : '2.2rem', fontSize:props.design === 'bookMark' ? '1.5rem' : '2.2rem', margin:props.design === 'bookMark' ? '-0.5rem 0 0.5rem 0' : '', lineHeight:props.design === 'bookMark' ? '1.25' : '1.5'}} className="textBlock__heading">{props.text.heading}</h1>
            <p style={{fontSize:props.color === 'white' ? '1.3rem' : '1.1rem', marginBottom:props.design === 'bookMark' ? '0rem' : '' }} className="textBlock__paragraph">{props.text.text}</p>
        </div>
    )
}

export default TextBlock