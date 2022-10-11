import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import classes from '../styles/PatientsList.module.scss'
const PatientsList = () => {
    const {getPatientsActionCreator} = useActions()
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
                {state.patients.map(function(patient){
                    return (
                        <div className={classes.patient}>
                            <h1>{patient.name} {patient.lastName} {patient.middleName}</h1>
                            <h3 style={{fontWeight:400}}>{patient.dateOfBirth}</h3>
                            <a>Детальніше</a>
                        </div>
                    )
                })}
            </div>
            {/*<ul>*/}
            {/*{state.patients.map(function(patient) {*/}
            {/*        return (*/}
            {/*            <li>{patient.lastName}</li>*/}
            {/*        )*/}
            {/*    }*/}
            {/*)*/}
            {/*}*/}

            {/*</ul>*/}


        </div>
        </React.Fragment>
            );
};

export default PatientsList;
