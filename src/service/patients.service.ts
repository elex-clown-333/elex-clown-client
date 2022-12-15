import {$api} from "../http/$api";
import {AxiosResponse} from "axios";
import {IFormData, IPatient} from "../types/types";

export class PatientService{
    static async getPatients():Promise<AxiosResponse<IPatient[]>>{
        return $api.get('/patients')
    }
    static async addPatient(data:IFormData):Promise<AxiosResponse>{
      return $api.post('/patients',{
          firstName:data.firstName,
          lastName:data.lastName,
          middleName:data.middleName,
          dateOfBirth:data.dateOfBirth,
          residence: 'Parasha'
      })
    }
    static async getPatientById(id:number):Promise<AxiosResponse>{
        return $api.get(`/patients/${id}`)
    }
}
