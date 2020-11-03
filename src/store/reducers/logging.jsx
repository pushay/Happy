import * as actionTypes from '../actions';

const initialState = {
    status:'',
}

const loggingReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOG_ING:
            return{
                ...state,

            }
        case actionTypes.LOG_OFF:
            return{
                ...state,

        }
        default:return state
    }
}

export default loggingReducer