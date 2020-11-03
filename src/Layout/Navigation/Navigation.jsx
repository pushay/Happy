import React from 'react';
import CustomLink from '../../Components/CustomLink/CustomLink';


function Navigation(props){
    return(
        <div className="navigation" style={props.style}>
            {props.nav.map((el, i)=> {
                return (
                <CustomLink key={i} links={props.links} nav={props.nav[i]} f={props.funct} diary={props.diary} />
            )})}
        </div>
    )
}

export default Navigation