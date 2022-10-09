import {ActionTypes, IAction, IState} from "../types/types";

let initialState:IState={
    patients:[]
}
export const mainReducer = function(state=initialState,action:IAction){
    switch (action.type){
        case ActionTypes.ADD_PATIENT:
            return {...state}
        case ActionTypes.DELETE_PATIENT:
            return {...state}
        case ActionTypes.ERROR:
            return {...state}
        case ActionTypes.FETCH_PATIENT:
            return {...state}
        default:
            return state
    }
}
