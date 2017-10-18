import { combineReducers } from 'redux'
import axios from 'axios';

//INITAL STATE
const initialState = {
    students:[],
    campuses:[],
    currentCampus:'',
    currentStudent:''
}

//ACTIONS
export const acts = {
    GET_STUDENTS: 'GET_STUDENTS',
    GET_STUDENT: 'GET_STUDENT',
    GET_CAMPUSES: 'GET_CAMPUSES',
    GET_CAMPUS: 'GET_CAMPUS',
    ADD_STUDENT: 'ADD_STUDENT',
    ADD_CAMPUS: 'ADD_CAMPUS',
    REMOVE_STUDENT: 'REMOVE_STUDENT',
    REMOVE_CAMPUS: 'REMOVE_CAMPUS'
}

//REDUCER ...yes, I like having a huge list so I can see them in one place
export default function rootReducer(state = initialState, action) {
    const assigner = (propy, val) => Object.assign({}, state, { propy: val });

    switch (action.type) {
        case acts.GET_CAMPUSES:
            return assigner('campuses', action.campuses);
        case acts.GET_CAMPUS:
            return assigner('currentCampus', action.campus);
        case acts.ADD_CAMPUS:
            return assigner('campuses', state.campuses.concat(action.campus));
        case acts.REMOVE_CAMPUS:
            return assigner('campuses', state.campuses.filter(campus => campus != action.campus));
        case acts.GET_STUDENTS:
            return assigner('campuses', action.campuses);
        case acts.GET_STUDENT:
            return assigner('currentCampus', action.campus);
        case acts.ADD_STUDENT:
            return assigner('campuses', state.campuses.concat(action.campus));
        case acts.REMOVE_STUDENT:
            return assigner('campuses', state.campuses.filter(campus => campus != action.campus));
      default: return state
  }
}

//ACTION CREATOR
// Uses an extra param to take an input, so I don't have to write a dozen identical action creators
export const sendAction = (actType, inputy) => ({ type: actType, inputy });

//THUNKS
//export const stateProps = Object.assign({}, initialState.; //For use with inserting thingTypes

export const fetchThings = (thingType, actionType, id='') => dispatch => {
    axios.get(`/api/${thingType}/${id}`)
        .then(res => dispatch(sendAction(actionType, res.data)))
        .catch(err => console.error('Fetching ' + thingType + ' unsuccessful', err));
}
