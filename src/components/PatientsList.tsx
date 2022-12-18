import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import classes from '../styles/PatientsList.module.scss'
const PatientsList = () => {
    const {getPatientsActionCreator,getDataOfPatienActionCreator} = useActions()

    const state = useTypedSelector(state1 => state1.mainReducer)
    useEffect(function(){
        getPatientsActionCreator()
    },[])
    return (
        <React.Fragment>
            <div style={{
                overflow:'scroll'
            }} className={classes.aside} id={'aside'}>
                <div className={classes.patientsList}>
                    {state.patients.length !== 0 ? (<>{state.patients.map(function(patient){
                            return (
                                <div className={classes.patient}>
                                    <h1>{patient.firstName} {patient.lastName} {patient.middleName}</h1>
                                    <h3 style={{fontWeight:400}}>{patient.dateOfBirth}</h3>
                                    <a onClick={()=>{
                                        getDataOfPatienActionCreator(patient.id)
                                    }} className={classes.details}>Детальніше</a>
                                </div>
                            )
                        })}</>) : (<h1 style={{marginTop: '70px'}}>No Patients</h1>)}
                </div>
            </div>
        </React.Fragment>
            );
};

export default PatientsList;
