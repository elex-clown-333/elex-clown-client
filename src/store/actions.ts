import {Dispatch} from "redux";
import {ActionTypes, IAction, IFormData, IPatient} from "../types/types";
import {PatientService} from "../service/patients.service";

export let getPatientsActionCreator = function (){
    return async function(dispatch:Dispatch<IAction>){
        try {
            const response = await PatientService.getPatients()
            console.log({response})
            dispatch({
                type: ActionTypes.FETCH_PATIENT,
                data: response
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
            console.log(response)
            dispatch({
                type:ActionTypes.FETCH_UNO_PATIENT,
                data:response
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
            let response = await PatientService.addPatient(data)
            dispatch({
                type:ActionTypes.ADD_PATIENT,
                data:response
            })
        } catch (e) {
            dispatch({
                type:ActionTypes.ERROR,
                data:e
            })
        }
    }
}
export let updatePatientActionCreator = function(data:IPatient){
    return async function(dispatch:Dispatch<IAction>){
        try{
            console.log('AUGHHHH',data)
            let response = await PatientService.updatePatientData(data)
            console.log(response);
            dispatch({
                type:ActionTypes.UPDATE_PATIENT,
                data:response.data
            })

        } catch (e) {
            dispatch({
                type:ActionTypes.ERROR,
                data:e
            })
        }
    }
}
