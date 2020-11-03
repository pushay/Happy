import React, {useEffect, useState} from 'react';
import 'firebase/database';
import DiarySingleEntry from './DiarySingleEntry/DiarySingleEntry';
import diary from '../../Assets/diary.png'
import DiaryInfo from '../DiaryInfo/DiaryInfo';
import { connect } from 'react-redux';

function DiaryEntries(props){

    const [entries, setEntries] = useState({})

    useEffect(()=>{
        if (props.database){
        let diaries = props.database.ref(`diaries/${props.id}`);
            diaries.on('value', (snapshot) => {
                   let snapchot = snapshot.val()
                    setEntries(snapchot ? snapchot : {})
                    console.log(snapchot)
                    console.log(snapshot)
            })}
    },[props.database])

    return(
        <div className="diaryEntries">
            <h1 className="diaryEntries__heading">Entries of diary</h1>
            {entries ? Object.keys(entries).map((data, i)=> {
                return(
                    <div key={i}>
                        <DiarySingleEntry data={entries[data]} />
                    </div> 
                )
                }) : <p>loading...</p>}
            {Object.keys(entries).length == 0 ? (
                <div className="diaryEntries">
                    <DiaryInfo heading="Your diary is empty. Please add some entry." image={diary}/>
                </div>) : null}
        </div>
    )
}

const mapPropsToState = state => {
    return{
    database: state.fire.database,
    id:state.fire.id
}}

export default connect(mapPropsToState, null) (DiaryEntries)