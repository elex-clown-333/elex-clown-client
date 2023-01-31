import React, {FC, useEffect, useState} from 'react'
import classes from '../styles/PatientInference.module.scss'
import {useDispatch} from "react-redux";
import {ActionTypes} from "../types/types";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import ModalWindow from "./UI/ModalWindow";
const PatientInference:FC = () => {
    let dispatch = useDispatch()
    let [isVisible,setIsVisible] = useState<boolean>(false)
    let {deleteInferenceActionCreator,addPatientInferenceActionCreator,updatePatientInferenceActionCreator} = useActions()
    let state = useTypedSelector(state=>state.mainReducer)
    let [inference,setInference] = useState<string>(state.currentConclusion? state.currentConclusion.data : '')
    let [num,setNum] = useState<number>(Math.floor(Math.random()*10000))
    let [focused,setFocused] = useState<boolean>(false)
    let [isVisible1,setIsVisible1] = useState<boolean>(false)
    let [isVisible2,setIsVisible2] = useState<boolean>(false)
    useEffect(()=>{
        setInference(state?.currentConclusion?.data)
    },[state])
    return (
        <>
            {
                isVisible && <ModalWindow setIsVisible = {setIsVisible} fn = {()=>{
                    if(isVisible1){
                        deleteInferenceActionCreator(state.currentConclusion.id)
                        dispatch({
                            type:ActionTypes.SET_INFERENCE_WINDOW,
                            data:false
                        })
                        setIsVisible1(false)
                        setIsVisible(false)

                    }
                    else if (isVisible2) {
                            console.log(focused)
                            dispatch({type: ActionTypes.SET_INFERENCE_WINDOW, data: false})
                            dispatch({
                                type: ActionTypes.GET_INFERENCE,
                                data: null
                            })
                            setIsVisible(false)
                            setIsVisible2(false)


                    }
                    else {
                        setFocused(false)
                        setIsVisible(false)
                        setInference(state.currentConclusion.data)
                    }
                }
                }/>
            }
            {
                state.currentConclusion
                    ? <div className={classes.base}>
                        <div className={classes.block}>

                            <div className={classes.header}>
                                <div className={classes.oxfordMedical}><img
                                    src={'https://oxford-med.com.ua/assets/img/icon/logo.svg'}/></div>
                                <div onClick={() => {
                                    if(focused) {
                                        setIsVisible2(true)
                                        setIsVisible(true)
                                    }
                                    else{
                                        dispatch({type: ActionTypes.SET_INFERENCE_WINDOW, data: false})
                                        dispatch({
                                            type: ActionTypes.GET_INFERENCE,
                                            data: null
                                        })
                                    }

                                }}
                                     className={classes.close}>
                                    <span>+</span>
                                </div>
                            </div>
                            <div className={classes.data}>
                                <div className={classes.yakasData}>
                                    <div>Дата:<span>{state.currentConclusion.date}</span>
                                    </div>
                                    <div>Історія N:<span>{state.currentConclusion.historyNumber}</span></div>
                                    <div>ПІБ: <span>{state.currentPatient.lastName + ' ' + state.currentPatient.firstName + ' ' + state.currentPatient.middleName}</span>
                                    </div>
                                    <div>Дата народження: <span>{state.currentPatient.dateOfBirth}</span></div>
                                    <div className={classes.uselessData}>
                                        <div className={classes.age}>Вік:<span>n років</span></div>
                                        <div className={classes.sex}>Стать:<span>{state.currentPatient.sex}</span></div>
                                    </div>
                                </div>
                                <div className={classes.patientDescription}>
                                    <div>
                                        <h2 style={{margin: '15px 0px'}}>Заключення</h2>
                                    </div>
                                    <textarea readOnly={!focused} value={inference} onChange={e=>{
                                        if (focused){
                                            setInference(e.target.value)
                                        }

                                    }
                                    }>
                                    </textarea>
                                </div>
                                <div className={focused ? classes.editBtn + ' ' + classes.focused : classes.editBtn}>

                                    <div>
                                        <button onClick={()=>{
                                            setFocused(true)
                                        }} className={classes.edit}><div>Edit</div></button>
                                        <button onClick={()=>{
                                            setFocused(false)
                                            updatePatientInferenceActionCreator(state.currentConclusion.id,inference)
                                        }
                                        } className={classes.save}><div>Save</div><i className='bx bxs-save'></i></button>
                                        <button onClick={()=>{

                                            setIsVisible(true)
                                        }} className={classes.cancel}><div>Cancel</div><i className='bx bx-x'></i></button>
                                    </div>
                                    <button onClick={()=>{
                                       setIsVisible(true)
                                        setIsVisible1(true)
                                    }
                                    } className={classes.deleteBtn}>
                                        <div>Delete</div>
                                        <i className='bx bxs-trash'></i>
                                    </button>
                                </div>
                                {/*<div style={{marginLeft: 20}} className={classes.creationBtn}>*/}
                                {/*    <button onClick={() => {*/}
                                {/*        addPatientInferenceActionCreator(state.currentPatient.id, {*/}
                                {/*            data: inference,*/}
                                {/*            date: new Date().getDate().toString() + '.' + new Date().getMonth().toString() + '.' + new Date().getFullYear(),*/}
                                {/*            historyNumber: num,*/}
                                {/*        })*/}
                                {/*    }}>*/}
                                {/*        <div>Створити</div>*/}
                                {/*        <i className='bx bx-cloud-upload'></i></button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                : <div className={classes.base}>
                    <div className={classes.block}>

                        <div className={classes.header}>
                            <div className={classes.oxfordMedical}>
                                <i>Обласне комунальне некомерційне підприємство</i>
                                <b>Чернівецький обласний ендокринологічний центр</b>
                                <div>Вул. Федьковича 50 м. Чернівці, 58001, тел. (0372)53-63-61</div>
                                <div><div>E-mail: oblendo@med.cv.ua</div><div>Код ЄДРПО:</div></div>
                            </div>
                            <div onClick={() => dispatch({type: ActionTypes.SET_INFERENCE_WINDOW, data: false})}
                                 className={classes.close}>
                                <span>+</span>
                            </div>
                        </div>
                        <div className={classes.data}>
                            <div className={classes.yakasData}>
                                <div>Дата:<span>{new Date().getDate()}.{(new Date().getMonth() + 1) > 9 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1).toString()}.{new Date().getFullYear()}</span>
                                </div>
                                <div>Історія N:<span>{num}</span></div>
                                <div>ПІБ: <span>{state.currentPatient.lastName + ' ' + state.currentPatient.firstName + ' ' + state.currentPatient.middleName}</span>
                                </div>
                                <div>Дата народження: <span>{state.currentPatient.dateOfBirth}</span></div>
                                <div className={classes.uselessData}>
                                    <div className={classes.age}>Вік:<span>n poків</span></div>
                                    <div className={classes.sex}>Стать:<span>{state.currentPatient.sex}</span></div>
                                </div>
                            </div>
                            <div className={classes.patientDescription}>
                                <div>
                                    <h2 style={{margin: '15px 0px'}}>Заключення</h2>
                                </div>
                                <textarea value={inference} onChange={e => {
                                    setInference(e.target.value)
                                }}>

                </textarea>
                            </div>
                            <div style={{marginLeft: 20}} className={classes.creationBtn}>
                                <button style={{marginLeft:30}} onClick={() => {
                                    if(inference.length==0){
                                        return new Promise((resolve)=>{
                                            document.querySelector(`.${classes.patientDescription} textarea`).classList.add(classes.shake)
                                            setTimeout(()=>{
                                                resolve(null)
                                            },250)
                                        }).then(data=>{
                                            document.querySelector(`.${classes.patientDescription} textarea`).classList.remove(classes.shake)
                                        })
                                    }
                                    addPatientInferenceActionCreator(state.currentPatient.id, {
                                        data: inference,
                                        date: new Date().getDate().toString() + '.' + new Date().getMonth().toString() + '.' + new Date().getFullYear(),
                                        historyNumber: num,
                                    })
                                    dispatch({
                                        type:ActionTypes.SET_INFERENCE_WINDOW,
                                        data:false
                                    })
                                }}>
                                    <div>Створити</div>
                                    <i className='bx bx-cloud-upload'></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default PatientInference
