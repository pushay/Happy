import * as actionTypes from '../actions';
import firebase from 'firebase';



const initialState = {
    sentToken: '',
    id:'',
    provider: null,
    database: null,
    diary:{}
}

const contactFirebaseReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.POST_DATA:
            if (state.sentToken !== ''){
                console.log(action.postedData)
                state.database.ref(`diaries/${state.id}` ).push().set({
                    ...action.postedData
                });
            }
            break;
        case actionTypes.LOG_IN:
            firebase.auth().signInWithRedirect(state.provider);
            break;
        case actionTypes.LOG_OFF:
            return {
                ...state, 
                sentToken:''
            }
        case actionTypes.INIT_FIREBASE:
            console.log('sdas', action)
            return {
                ...state,
                database: action.database,
                sentToken: action.token,
                provider: action.provider,
                id:action.id
            }
        default: 
            return state
    }
    return state
}


export default contactFirebaseReducer;