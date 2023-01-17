import {Dispatch} from "redux";
import {ActionTypes, IAction, IFormData, IPatient} from "../types/types";
import {PatientService} from "../service/patients.service";
import {InferenceService} from "../service/inference.service";

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
export let getPatientInferencesActionCreator = function(id:number){
    return async function(dispatch:Dispatch<IAction>){
        try{
            let response = await InferenceService.getInferences(id)
            console.log('AAAAAA',response)
            dispatch({
                type:ActionTypes.FETCH_INFERENCE,
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
export let deleteInferenceActionCreator = function(id:number){
    return async function(dispatch:Dispatch<IAction>){
        try{
            let response = await InferenceService.deleteInference(id)
            dispatch({
                type:ActionTypes.DELETE_INFERENCE,
                data:{...response.data,id}
            })
        } catch (e) {
            dispatch({
                type:ActionTypes.ERROR,
                data:e
            })
        }
    }
}
export let updatePatientInferenceActionCreator = function(id:number,data:string){
    return async function(dispatch:Dispatch<IAction>){
        try{
            let response = await InferenceService.updateInference(id,{data})
            console.log('RESPONDER',response)
            dispatch({
                type:ActionTypes.UPDATE_INFERENCE,
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
export let addPatientInferenceActionCreator = function(id:number,data:object){
    return async function(dispatch:Dispatch<IAction>) {
        try {
            let response = await InferenceService.createInference(id,data)
            dispatch({
                type: ActionTypes.ADD_INFERENCE,
                data: response.data
            })
        } catch (e) {
            dispatch({
                type:ActionTypes.ERROR,
                data:e
            })
        }
    }
}

export let getPatientInferenceByIdActionCreator = function(id:number){
    return async function(dispatch:Dispatch<IAction>){
        try{
            let response = await InferenceService.getInferenceById(id)
            console.log(response)
            dispatch({
                type:ActionTypes.GET_INFERENCE,
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
export let addPatientActionCreator = function(data:IFormData){
    return async function(dispatch:Dispatch<IAction>){
        try{
            let response = await PatientService.addPatient(data)
            console.log('AAA,',response)
            dispatch({
                type:ActionTypes.ADD_PATIENT,
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
