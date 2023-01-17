import {$api} from "../http/$api";
import axios, {AxiosResponse} from "axios";
import {IFormData, IPatient} from "../types/types";

export class PatientService{
    static async getPatients():Promise<AxiosResponse>{
        return $api.get('/patients')
    }
    static async addPatient(data:IFormData): Promise<AxiosResponse>{
        console.log('service yobaniy',data.residence)
        return $api.post('/patients',{
            firstName:data.firstName,
            lastName:data.lastName,
            middleName:data.middleName,
            dateOfBirth:data.dateOfBirth,
            residence:data.residence,
            source:data?.source,
            sex:data.sex
        } as IPatient)
      // return $api.post('/patients',{
      //     firstName:data.firstName,
      //     lastName:data.lastName,
      //     middleName:data.middleName,
      //     dateOfBirth:data.dateOfBirth,
      //     residence: 'Parasha'
      // })
    }
    static async getPatientById(id:number):Promise<AxiosResponse>{
        return $api.get(`/patients/${id}`)
    }
    static async updatePatientData(data:IPatient):Promise<AxiosResponse>{
        return $api.patch("/patients/" + data.id,{
            firstName:data.firstName,
            middleName:data.middleName,
            lastName:data.lastName,
            dateOfBirth:data.dateOfBirth,
            residence:data.residence,
        })
    }
}
