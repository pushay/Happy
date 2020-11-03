import React from 'react';

function DairyText(props){

    return(
        <div className="diaryText">
            <form className="diaryForm">
                <input name='heading' type="text" required className="diaryForm__input" onChange={(e) =>props.getData(e.target.value, e.target.name)} placeholder="title of diary note"/>
                <textarea name='paragraph' required className="diaryForm__textarea" onChange={(e) =>props.getData(e.target.value, e.target.name)} placeholder="write what happened"/>
            </form>
        </div>
    )
}

export default DairyText