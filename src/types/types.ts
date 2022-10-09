export interface IAction {
    type: ActionTypes,
    data: any
}
export interface IState{
    patients:IPatient[],
}
export interface IPatient{
    id:number,
    name:string,
    lastName:string,
    middleName:string,
    dateOfBirth:string,
}

export enum ActionTypes{
    FETCH_PATIENT = "FETCH_PATIENT",
    ERROR = "ERROR",
    ADD_PATIENT="ADD_PATIENT",
    DELETE_PATIENT="DELETE_PATIENT",
}
