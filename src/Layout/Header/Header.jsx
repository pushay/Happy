import React, {useEffect, useState} from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router-dom'
import Button from '../../Components/Button/Button';
import NavigationText from '../Navigation/NavigationText';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions'


function Header(props){

    const navigationPrimiary = {display:'flex',width:'170px', justifyContent: 'space-between', marginRight:'3rem'
    }

    const [log, setLog] = useState('log in') 


    const changingStatus = () => {
        if (props.token == ''){
            props.onLoggingIn(null);
            console.log('logg in!')
            
        }
        else {
            setLog('log in');
            props.onLoggingOff(null)
            console.log('log off')
        }
    }

    return(
        <div className="header">
            <div className="header__logo">
                <Link to="/" className="header__logo--heading">Happy Bee</Link>
            </div>
            <Navigation style={navigationPrimiary} nav={NavigationText.Navigation}/>
            <Button text={props.token == '' ? 'log in' : 'log off'} onClick={()=> {changingStatus()}} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        onLoggingIn:(item) => dispatch({
            type:actionTypes.LOG_IN,
            item
        }),
        onLoggingOff:(item) => dispatch({
            type:actionTypes.LOG_OFF,
            item
        })
    }
}

const mapStateToProps = state => {
    return{
        token:state.fire.sentToken
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)