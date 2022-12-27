import React, {ChangeEvent, useState,MouseEvent} from 'react';
import classes from '../styles/PatientForm.module.scss'
import classes2 from '../styles/MaterialInput.module.scss'
import MaterialInput from "./UI/MaterialInput";
import {ActionTypes, IFormData, IPropsInput} from "../types/types";
import {useDispatch} from "react-redux";
import {useActions} from "../hooks/useActions";
const AddPatientForm = () => {
    const {addPatientActionCreator} = useActions()
    let [formData,setFormData] = useState<IFormData>({
        residence: "",
        dateOfBirth:'',
        middleName:'',
        lastName:'',
        firstName:''
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
                    value:formData.firstName,
                    controlFn:(e:ChangeEvent<HTMLInputElement>)=>setFormData({
                        ...formData,
                        firstName:e.target.value
                    })
                } as IPropsInput}></MaterialInput>
            </div>
            <div className={classes.lastName}>
                <MaterialInput info={{
                    placeholder:'Прізвище',
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
            <div className={classes.residence}>
                <MaterialInput info={{
                    placeholder:'Місце проживання',
                    type:'text',
                    value:formData.residence,
                    controlFn:(e:ChangeEvent<HTMLInputElement>)=>setFormData({
                        ...formData,
                        residence:e.target.value
                    })
                } as IPropsInput}></MaterialInput>
            </div>
            <button onClick={function(e:MouseEvent<HTMLButtonElement>){
                e.preventDefault()
                if(Object.values(formData).every(value=>value.length>0)) {
                    addPatientActionCreator(formData)
                    console.log('hrin');

                }
                else {
                    new Promise(function(resolve, reject){
                            document.querySelectorAll(`.${classes.form} > div>div input`).forEach(input => {
                                //@ts-ignore
                                if (input?.value.length == 0) {
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
            }}>Додати</button>

        </form>
        </div>
    );
};

export default AddPatientForm;
