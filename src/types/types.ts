export interface IAction {
    type: ActionTypes,
    data: any
}
export interface IPropsInput{
    placeholder:string,
    type?:string,
    value:string,
    controlFn:()=>void,
}
export interface IState{
    focusedInference:boolean,
    currentConclusion:IConclusion,
    conclusions:IConclusion[],
    isVisible:boolean,
    focused?:null | boolean,
    patients:IPatient[],
    isVisibleInferenceWindow?:boolean
    query: string,
    currentPatient:IPatient | null,
}
export interface IPatient extends IFormData {
    id:number,
    color?:string,
    protocol: string
}
export interface IConclusion{
    data:string,
    id:number,
    date:string,
    historyNumber:number
}
export interface IFormData {
    sex?:'Чоловіча'|'Жіноча',
    firstName:string,
    lastName:string,
    middleName:string,
    dateOfBirth:string,
    residence:string,
    source?:string
}

export enum ActionTypes{
    FETCH_INFERENCE='FETCH_INFERENCE',
    ADD_INFERENCE = 'ADD_INFERENCE',
    SEARCHING_PATIENT="SEARCHING_PATIENT",
    UPDATE_PATIENT="UPDATE_PATIENT",
    SET_FOCUSED="SET_FOCUSED",
    FETCH_UNO_PATIENT='FETCH_UNO_PATIENT',
    FETCH_PATIENT = "FETCH_PATIENT",
    ERROR = "ERROR",
    SET_FOCUSED_INFERENCE = "SET_FOCUSED_INFERENCE",
    SET_MODAL = "SET_MODAL",
    DELETE_INFERENCE = "DELETE_INFERENCE",
    UPDATE_INFERENCE = "UPDATE_INFERENCE",
    ADD_PATIENT="ADD_PATIENT",
    DELETE_PATIENT="DELETE_PATIENT",
    SET_INFERENCE_WINDOW = "SET_INFERENCE_WINDOW",
    GET_INFERENCE = "GET_INFERENCE",
}
