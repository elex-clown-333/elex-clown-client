import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import classes from '../styles/PatientsList.module.scss'
import {ActionTypes, IPatient} from "../types/types";
const PatientsList = () => {
    const {getPatientsActionCreator,getDataOfPatienActionCreator} = useActions()

    const state = useTypedSelector(state1 => state1.mainReducer)

    const [patients, setPatients] = useState<IPatient[]>([]);

    let dispatch = useDispatch()

    useEffect(function(){
        getPatientsActionCreator()
    },[])

    useEffect(() => {
        setPatients(state.patients)
    }, [state.patients])

    useEffect(() => {
        setPatients(state.patients.filter(patient => {
            return patient.lastName.toLowerCase().includes(state.query)
        }))
    }, [state.query])
    return (
        <React.Fragment>
            <div style={{
                overflow:'scroll'
            }} className={classes.aside} id={'aside'}>
                <div className={classes.patientsList}>
                    {patients.length ? (<>{patients.map(function(patient){
                            return (
                                <div className={classes.patient}>
                                    <h1>{patient.lastName} {patient.firstName} {patient.middleName}</h1>
                                    <h3 style={{fontWeight:400}}>{patient.dateOfBirth}</h3>
                                    <a onClick={()=>{
                                        getDataOfPatienActionCreator(patient.id)
                                        dispatch({
                                            type:ActionTypes.SET_FOCUSED,
                                            data:false
                                        })
                                        console.log('set')

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
