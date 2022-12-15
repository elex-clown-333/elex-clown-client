import {Dispatch} from "redux";
import {ActionTypes, IAction, IFormData} from "../types/types";
import {PatientService} from "../service/patients.service";

export let getPatientsActionCreator = function (){
    return async function(dispatch:Dispatch<IAction>){
        try {
            const response = await PatientService.getPatients()
            dispatch({
                type: ActionTypes.FETCH_PATIENT,
                data: response.data
            })
        }
        catch (e) {
            dispatch({
                type:ActionTypes.ERROR,
                data:e
            })
        }
    }
}
//hrin/34928; hrin?id=34928
export let getDataOfPatienActionCreator = function(id:number){
    return async function(dispatch:Dispatch<IAction>){
        try{
            let response = await PatientService.getPatientById(id)
            dispatch({
                type:ActionTypes.FETCH_UNO_PATIENT,
                data:response.data
            })
        }
        catch(e){
            dispatch({
                type:ActionTypes.ERROR,
                data:e
            })
        }
    }
}
export let addPatientActionCreator = function(data:IFormData){
    return async function(dispatch:Dispatch<IAction>){
        try{
            console.log(data)
            let response = await PatientService.addPatient(data)
            console.log('huy')
            dispatch({
                type:ActionTypes.ADD_PATIENT,
                data:response.data
            })
            console.log('dispatched');
        } catch (e) {
            console.log('error');
            dispatch({
                type:ActionTypes.ERROR,
                data:e
            })
        }
    }
}
