import {$api} from "../http/$api";
import axios, {AxiosResponse} from "axios";
import {IFormData, IPatient} from "../types/types";

export class PatientService{
    static async getPatients():Promise<IPatient[]>{
        return (await $api.get('/')).data.patients
    }
    static async addPatient(data:IFormData): Promise<IPatient>{
        console.log('service yobaniy',data.residence)
        return (await $api.post('/',{
            firstName:data.firstName,
            lastName:data.lastName,
            middleName:data.middleName,
            dateOfBirth:data.dateOfBirth,
            residence:data.residence,
            source:data?.source
        })).data.patient
      // return $api.post('/patients',{
      //     firstName:data.firstName,
      //     lastName:data.lastName,
      //     middleName:data.middleName,
      //     dateOfBirth:data.dateOfBirth,
      //     residence: 'Parasha'
      // })
    }
    static async getPatientById(id:number):Promise<IPatient>{
        return (await $api.get("/" + id)).data.patient
    }
    static async updatePatientData(data:IPatient):Promise<AxiosResponse>{
        return $api.put("/" + data.id,{
            firstName:data.firstName,
            middleName:data.middleName,
            lastName:data.lastName,
            dateOfBirth:data.dateOfBirth,
            residence:data.residence,
            protocol: data.protocol
        })
    }
}
