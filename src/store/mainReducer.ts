import {ActionTypes, IAction, IState} from "../types/types";

let initialState:IState={
    patients:[
        {
            name:'Bobr',
            lastName:'Kurwa',
            middleName:'Bobrovich',
            dateOfBirth:'0404030'
        },
        {
            name:'Bobr',
            lastName:'Kurwa',
            middleName:'Bobrovich',
            dateOfBirth:'0404030'
        },
        {
            name:'Bobr',
            lastName:'Kurwa',
            middleName:'Bobrovich',
            dateOfBirth:'0404030'
        },
        {
            name:'Bobr',
            lastName:'Kurwa',
            middleName:'Bobrovich',
            dateOfBirth:'0404030'
        },
        {
            name:'Bobr',
            lastName:'Kurwa',
            middleName:'Bobrovich',
            dateOfBirth:'0404030'
        },
        {
            name:'Bobr',
            lastName:'Kurwa',
            middleName:'Bobrovich',
            dateOfBirth:'0404030'
        },

    ],
    isVisible:false,
}
export const mainReducer = function(state=initialState,action:IAction):IState{
    switch (action.type){
        case ActionTypes.ADD_PATIENT:
            return {...state,patients:state.patients.concat(action.data)}
        case ActionTypes.DELETE_PATIENT:
            return {...state}
        case ActionTypes.ERROR:
            return {...state}
        case ActionTypes.FETCH_PATIENT:
            return {...state,patients:action.data}
        case ActionTypes.SET_MODAL:
            return {...state,isVisible:action.data}
        default:
            return state
    }
}
