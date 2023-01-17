import {ActionTypes, IAction, IState} from "../types/types";

let initialState:IState={
    currentConclusion: null,
    patients:[],
    focusedInference:false,
    query: '',
    currentPatient:null,
    isVisibleInferenceWindow:false,
    isVisible:false,
    focused:null,
    conclusions:[]
}
export const mainReducer = function(state=initialState,action:IAction):IState{
    switch (action.type){
        case ActionTypes.SEARCHING_PATIENT:
            // console.log(`DFDDDDDD ${action.data}`)
            // let patients = state.patients
            // if (action.data !== '') {
            //     patients = state.patients.filter(patient=>{
            //         return patient.lastName.toLowerCase().includes(action.data.toLowerCase())})
            // }
            return {...state, query: action.data.toLowerCase()}
        case ActionTypes.SET_FOCUSED:
            return {...state,focused:action.data}
        case ActionTypes.SET_FOCUSED_INFERENCE:
            return {...state,focusedInference:action.data}
        case ActionTypes.FETCH_INFERENCE:
            return {...state,conclusions:action.data}
        case ActionTypes.GET_INFERENCE:
            return {...state,currentConclusion:action.data}
        case ActionTypes.ADD_INFERENCE:
            return {...state,conclusions:state.conclusions.concat(action.data)}
        case ActionTypes.UPDATE_PATIENT:
            console.log('HRINA',action.data)
            return {...state,currentPatient:action.data, patients: state.patients.map(patient => {
                if (action.data.id == patient.id) {
                    return action.data
                }
                return patient
            })}
        case ActionTypes.UPDATE_INFERENCE:
            return {...state,currentConclusion:{...state.currentConclusion,...action.data}}
        case ActionTypes.SET_INFERENCE_WINDOW:
            return {...state,isVisibleInferenceWindow:action.data}
        case ActionTypes.ADD_PATIENT:
            return {...state,patients: state.patients.concat(action.data)}
        case ActionTypes.DELETE_PATIENT:
            return {...state}
        case ActionTypes.ERROR:
            alert(action.data.message)
            return {...state}
        case ActionTypes.DELETE_INFERENCE:
            return {...state,currentConclusion:null,conclusions:state.conclusions.filter(conclusion=>{
                return conclusion.id != action.data.id
                })}
        case ActionTypes.FETCH_PATIENT:
            return {...state,patients: action.data}
        case ActionTypes.SET_MODAL:
            return {...state,isVisible: action.data}
        case ActionTypes.FETCH_UNO_PATIENT:
            return {...state,currentPatient:action.data}
        default:
            return state
    }
}
