import React from 'react';


function Button(props){
    const moveUpHandler = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    if (props.text == undefined) return null

    if (props.text == 'Post') return (
        <div className="buttonCheck"
        onMouseEnter={props.checkStatus ? ()=> props.checkStatus() : null} >
             <div
            className="button"
            disabled={props.disabled}
            onClick={props.onClick ? props.onClick : () => moveUpHandler()}
            style={{padding: props.text == null ? "0rem" : '0.4rem 2rem', margin:props.end == 'yes' ? '3rem 0 2rem 0' : '',  opacity: props.disabled ? '0.65' : '1'}}>
                <p className='button__text'>{props.text}</p>
        </div>
        </div>
    )

    return(
        <div
            className="button"
            disabled={props.disabled}
            onClick={props.onClick ? props.onClick : () => moveUpHandler()}
            style={{padding: props.text == null ? "0rem" : '0.4rem 2rem', margin:props.end == 'yes' ? '3rem 0 2rem 0' : '',  opacity: props.disabled ? '0.65' : '1'}}>
                <p className='button__text'>{props.text}</p>
        </div>
    )
}

export default Button