import React, {ChangeEvent, useState,MouseEvent} from 'react';
import classes from '../styles/PatientForm.module.scss'
import classes2 from '../styles/MaterialInput.module.scss'
import MaterialInput from "./UI/MaterialInput";
import {ActionTypes, IFormData, IPropsInput} from "../types/types";
import {useDispatch} from "react-redux";
const AddPatientForm = () => {
    let [formData,setFormData] = useState<IFormData>({
        dateOfBirth:'',
        middleName:'',
        lastName:'',
        name:''
    })
    let [radios,setRadios] = useState<Array<{color:string}>>([
        {
            color:'lightgreen'
        },
        {
            color:'lightcoral'
        },
        {
            color:'lightblue'
        }
    ])
    let dispatch = useDispatch()
    return (
        <div onClick={()=>{
            dispatch({
                type:ActionTypes.SET_MODAL,
                data:false
            })
        }} className={classes.layOut}>
        <form onClick={function(e:MouseEvent<HTMLFormElement>){
            e.stopPropagation()
        }} className={classes.form}>
            <div className={classes.firstName}>
                <MaterialInput info={{
                    placeholder:'Ім\'я',
                    type:'text',
                    value:formData.name,
                    controlFn:(e:ChangeEvent<HTMLInputElement>)=>setFormData({
                        ...formData,
                        name:e.target.value
                    })
                } as IPropsInput}></MaterialInput>
            </div>
            <div className={classes.lastName}>
                <MaterialInput info={{
                    placeholder:'Фамілія',
                    type:'text',
                    value:formData.lastName,
                    controlFn:(e:ChangeEvent<HTMLInputElement>)=>setFormData({
                        ...formData,
                        lastName:e.target.value
                    })
                } as IPropsInput}></MaterialInput>
            </div>
            <div className={classes.middleName}>
                <MaterialInput info={{
                    placeholder:'По-батькові',
                    type:'text',
                    value:formData.middleName,
                    controlFn:(e:ChangeEvent<HTMLInputElement>)=>setFormData({
                        ...formData,
                        middleName:e.target.value
                    })
                } as IPropsInput}></MaterialInput>
            </div>
            <div className={classes.dateOfBirth}>
                <MaterialInput info={{
                    placeholder:'Дата народження',
                    type:'date',
                    value:formData.dateOfBirth,
                    controlFn:(e:ChangeEvent<HTMLInputElement>)=>setFormData({
                        ...formData,
                        dateOfBirth:e.target.value
                    })
                } as IPropsInput}></MaterialInput>
            </div>
            <div className={classes.radiosColors}>
                <span>Колір</span>
               <div className={classes.radios}> {
                    radios.map(radio=>{
                        return (
                            <input style={{
                                accentColor:radio.color
                            }} name={'colors'} type={"radio"}/>
                        )
                    })
                }
               </div>

            </div>
            <button onClick={function(e:MouseEvent<HTMLButtonElement>){

                    e.preventDefault()
                if(Object.values(formData).every(value=>value.length>0)) {


                    dispatch({
                        type: ActionTypes.ADD_PATIENT,
                        data: formData
                    })
                }
                else {
                    new Promise(function(resolve, reject){
                            document.querySelectorAll(`.${classes.form} > div>div input`).forEach(input => {
                                if (input.value.length == 0) {
                                    console.log(';llk')
                                    input.parentElement.classList.add(classes2.shake)
                                }
                            })
                        setTimeout(()=>{
                            resolve(null)
                        },250)

                    }).then(()=>{
                        document.querySelectorAll(`.${classes.form} > div>div input`).forEach(input => {
                            input.parentElement.classList.remove(classes2.shake)
                        })
                    })




                }
                // document.querySelectorAll(`.${classes.form}>div>div`).forEach(function(div){
                //     div.classList.remove(classes2.shake)
                // })

            }}>Додати</button>

        </form>
        </div>
    );
};

export default AddPatientForm;
