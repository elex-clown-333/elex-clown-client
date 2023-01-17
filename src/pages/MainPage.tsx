import React from 'react';
import NavBar from "../components/NavBar";
import PatientsList from "../components/PatientsList";
import AddPatientForm from "../components/AddPatientForm";
import {useTypedSelector} from "../hooks/useTypedSelector";
import UserPage from "./UserPage";
import PatientInference from "../components/PatientInference";
const MainPage = () => {
    const state = useTypedSelector(state=>state.mainReducer)
    return (
        <React.Fragment>
            <NavBar/>
            <PatientsList/>
            {
                state.isVisible && <AddPatientForm/>
            }
            <UserPage/>
            {
                state.isVisibleInferenceWindow
                && <PatientInference/>
            }
        </React.Fragment>
    );
};

export default MainPage;
