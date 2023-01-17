import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import classes from '../styles/PatientsList.module.scss'
import {ActionTypes, IPatient} from "../types/types";
import ModalWindow from "./UI/ModalWindow";
const PatientsList = () => {
    const {getPatientInferencesActionCreator,getPatientsActionCreator,getDataOfPatienActionCreator} = useActions()

    const state = useTypedSelector(state1 => state1.mainReducer)

    const [patients, setPatients] = useState<IPatient[]>([]);
    const [del, setDel] = useState<boolean>(false)

    let dispatch = useDispatch()
    let [idx,setIdx] = useState<number>(null)
    useEffect(function(){
        getPatientsActionCreator()

    },[])

    useEffect(() => {
        setPatients(state.patients)
        console.log('changed')
    }, [state.patients])

    useEffect(() => {
        setPatients(state.patients.filter(patient => {
            return patient.lastName.toLowerCase().includes(state.query)
        }))
    }, [state.query])
    const[isVisible,setIsVisible] = useState<boolean>(false)
    return (
        <React.Fragment>
            {/*// @ts-ignore*/}
            {isVisible && <ModalWindow fn={()=>{
                getDataOfPatienActionCreator(idx)
                dispatch({
                    type:ActionTypes.SET_FOCUSED,
                    data:false
                })
                setIsVisible(false)
            }} isVisible={isVisible} setIsVisible={setIsVisible}/>}
            <div style={{
                overflow:'scroll'
            }} className={classes.aside} id={'aside'}>
                <div className={classes.patientsList}>
                    {patients?.length ? (<>{patients.map(function(patient,index){
                            return (
                                <>
                                    {/*@ts-ignore*/}
                                    <div onContextMenu={e=>{
                                    // setIdx(index)
                                    //@ts-ignore
                                    document.querySelector(`.${classes.deleteBtn}`).style.left=`${e.clientX}px`
                                    //@ts-ignore
                                    document.querySelector(`.${classes.deleteBtn}`).style.top=`${e.clientY-93}px`
                                }} className={classes.patient}>
                                    <div className={index === idx ? classes.delActive + ' ' + classes.deleteBtn: classes.deleteBtn}>Видалити</div>
                                    <h1 style={{pointerEvents:'none'}}>{patient.lastName} {patient.firstName} {patient.middleName}</h1>
                                    <h3 style={{fontWeight:400}}>{patient.dateOfBirth}</h3>

                                    <a onClick={()=>{
                                        if(state.focused) {
                                            setIdx(patient.id)
                                            setIsVisible(true)
                                        }
                                        else {
                                            getDataOfPatienActionCreator(patient.id)
                                            getPatientInferencesActionCreator(patient.id)
                                            dispatch({
                                                type:ActionTypes.SET_FOCUSED,
                                                data:false
                                            })
                                        }
                                    }} className={classes.details}>Детальніше</a>
                                </div>
                                    </>
                            )
                        })}</>) : (<h1 style={{marginTop: '70px'}}>No Patients</h1>)}
                </div>
            </div>
        </React.Fragment>
            );
};

export default PatientsList;
