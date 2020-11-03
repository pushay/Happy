import React from 'react';
import DiaryPickTime from './DairyPickTime/DairyPickTime';
import DairyPickCalendar from './DairyPickCalendar/DairyPickCalendar';
import DairyText from './DairyText/DairyText';
import Button from '../../Components/Button/Button';
import { useState } from 'react';
import moment from 'moment';
import { useRef } from 'react';
import { useEffect } from 'react';
import diary1 from '../../Assets/diary.png';
import DiaryInfo from '../DiaryInfo/DiaryInfo';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

function DiaryNewOne(props){

    const [diary, setDiary] = useState({})
    const isReady = useRef(false);
    const [added, setAdded] = useState('false');

    useEffect(() => {
        
        if (diary['calendar'] && diary['time'] && isReady.current) {     
            props.onPostingData(diary);
            props.onGettingData(null)
            isReady.current = false;
            setDiary({});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ diary ])

    const postSingleDiary = (e) =>{
            let date = Date.now()
            let time = diary['time'];
            let calendar = diary['calendar']
            
            if (!diary['time']){
                time = moment(date).format("HH:mm:ss");
            }
            if (!diary['calendar']){
                calendar = moment(date).format('DD/MM/YYYY');
            }
            if (diary.paragraph && diary.heading) {
                isReady.current = true;
                setDiary({...diary, time, calendar });
                setAdded('true');
            }
    }

    const getData = (value, name) => {
            setDiary({...diary, [name]:value});
    }

    const checkStatus = () => {
        console.log('przed ??')
        if (props.token == '') {
            props.onLoggingIn(null)
            console.log('pusty')
        }
        console.log('pelłyn')
    }

     if (added == 'true'){
        setTimeout(()=> {
            setAdded('false');
        }, 6000);
         return(
             <div className="diaryNew">
                 <DiaryInfo heading="Entry has been added!" image={diary1} />
             </div>
         )
     }
    return(
        <div className="diaryNew">
            <h1 className="diaryNew__heading">How are you?</h1>
            <div className="diaryNew__time">
                <DairyPickCalendar getData={getData}/>
                <DiaryPickTime getData={getData}/>
            </div>
            <DairyText getData={getData} />
            <Button text="Post" checkStatus={checkStatus} disabled={!(diary.heading && diary.paragraph)} onClick={()=> {postSingleDiary()}} />
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return{
        onPostingData:(data) => dispatch({
            type:actionTypes.POST_DATA,
            postedData:data
        }),
        onGettingData:(item) => dispatch({
            type:actionTypes.GET_DATA,
            item
        }),
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



export default  connect(mapStateToProps, mapDispatchToProps)(DiaryNewOne)