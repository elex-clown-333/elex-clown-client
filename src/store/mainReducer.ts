import {ActionTypes, IAction, IState} from "../types/types";

let initialState:IState={
    patients:[],
    currentPatient:null,
    isVisible:false,
}
export const mainReducer = function(state=initialState,action:IAction):IState{
    switch (action.type){
        case ActionTypes.ADD_PATIENT:
            return {...state,patients:state.patients.concat(action.data)}
        case ActionTypes.DELETE_PATIENT:
            return {...state}
        case ActionTypes.ERROR:
            alert(action.data.message)
            return {...state}
        case ActionTypes.FETCH_PATIENT:
            return {...state,patients:action.data}
        case ActionTypes.SET_MODAL:
            return {...state,isVisible:action.data}
        case ActionTypes.FETCH_UNO_PATIENT:
            return {...state,currentPatient:action.data}
        default:
            return state
    }
}
