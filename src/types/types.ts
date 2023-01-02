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
    isVisible:boolean,
    focused?:null | boolean,
    patients:IPatient[],
    query: string,
    currentPatient:IPatient | null,
}
export interface IPatient extends IFormData {
    id:number,
    color?:string,
    protocol: string
}
export interface IFormData {
    firstName:string,
    lastName:string,
    middleName:string,
    dateOfBirth:string,
    residence:string,
    source?:string
}

export enum ActionTypes{
    SEARCHING_PATIENT="SEARCHING_PATIENT",
    UPDATE_PATIENT="UPDATE_PATIENT",
    SET_FOCUSED="SET_FOCUSED",
    FETCH_UNO_PATIENT='FETCH_UNO_PATIENT',
    FETCH_PATIENT = "FETCH_PATIENT",
    ERROR = "ERROR",
    SET_MODAL = "SET_MODAL",
    ADD_PATIENT="ADD_PATIENT",
    DELETE_PATIENT="DELETE_PATIENT",
}
