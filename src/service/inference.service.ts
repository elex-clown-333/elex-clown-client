import {$api} from "../http/$api";
import {AxiosResponse} from "axios";
import {IConclusion} from "../types/types";

export class InferenceService{
    static async createInference(id:number,data:object):Promise<AxiosResponse>{
        console.log(data)
        return $api.post('/conclusions',{
            ...data,
            patientID:id
        })
    }
    static async getInferences(id:number):Promise<AxiosResponse<IConclusion[]>>{
        return $api.get(`/conclusions?patientID=${id}`)
    }
    static async getInferenceById(id:number):Promise<AxiosResponse<IConclusion>>{
        return $api.get(`/conclusions/${id}`)
    }
    static async updateInference(id,data):Promise<AxiosResponse>{
        return $api.patch(`/conclusions/${id}`,data)
    }
    static async deleteInference(id:number):Promise<AxiosResponse>{
        return $api.delete(`/conclusions/${id}`)
    }

}
