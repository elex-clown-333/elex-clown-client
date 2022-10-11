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
    patients:IPatient[],
}
export interface IPatient extends IFormData{
    id?:number,
}
export interface IFormData {
    name:string,
    lastName:string,
    middleName:string,
    dateOfBirth:string,
}

export enum ActionTypes{
    FETCH_PATIENT = "FETCH_PATIENT",
    ERROR = "ERROR",
    SET_MODAL = "SET_MODAL",
    ADD_PATIENT="ADD_PATIENT",
    DELETE_PATIENT="DELETE_PATIENT",
}
