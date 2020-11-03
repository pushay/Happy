import React from 'react';
import {Link} from 'react-router-dom';

function CustomLink(props){
    return(
        <div className="customLink" style={{marginLeft:props.diary == 'yes' ? '2rem' : ''}}>
            <Link onClick={props.f ? ()=> {props.f(props.nav.component)} : () => {}} className="customLink__link" to={(props.links == 'no') ? '/diary' : props.nav.link}>{props.nav.text}</Link>
        </div>
    )
}

export default CustomLink