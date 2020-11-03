import React from 'react';
import clouds from '../../Assets/clouds.jpg';
import TextBlock from '../TextBlock/TextBlock';
import Button from '../Button/Button';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';


function Section(props){

    return(
        <div style={{backgroundImage:props.start === 'yes' ? `url(${clouds})`: null, padding:props.start === "yes" ? '4rem 0 18rem 0' : '4rem 2rem 0rem 2rem', flexDirection:props.styles === 'center' ? 'column' : 'row', justifyContent:"center"}} className="section">
            <img alt="img" style={{ marginRight:'3rem', display:props.photo1 === '' ? 'none' : ''}} className="section__image" src={props.photo1 }/>
            <TextBlock text={props.section} design={props.design} color={props.color} />
            <Button text={props.text} disableButton={props.disableButton} onClick={props.token == '' ? ()=> {props.onLoggingIn(null)} : null } />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        onLoggingIn:(item) => dispatch({
            type:actionTypes.LOG_IN,
            item
        })
    }
}

const mapStateToProps = state => {
    return{
        token:state.fire.sentToken
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);