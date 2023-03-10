import React, {FC, useEffect, useState} from 'react'
import classes from '../styles/UserPage.module.scss'
import axios from "axios";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {ActionTypes, IPatient} from "../types/types";
import {useActions} from "../hooks/useActions";
import ModalWindow from "../components/UI/ModalWindow";
const UserPage:FC=()=>{
    let {updatePatientActionCreator,getPatientInferenceByIdActionCreator} = useActions()
    let[src,setSrc] = useState<string>('')
    let focused = useTypedSelector(state => state.mainReducer.focused)
    let state = useTypedSelector(state1 => state1.mainReducer)
    const currentPatient = useTypedSelector(state => state.mainReducer.currentPatient)
    const [patrick, setPatrick] = useState<IPatient>(null);
    // let[focused,setFocused] = useState<boolean>(null)
    let dispatch = useDispatch()
    useEffect(()=>{

        // axios.get('https://jsonplaceholder.typicode.com/photos/1').then(response=>{
        //     setSrc(response.data.url)
        // })

        window.addEventListener('scroll',function(e){
            window.scrollY > 150 ? document.querySelector(`.${classes.scrollToTop}`).classList.add(classes.scrolled): document.querySelector(`.${classes.scrollToTop}`).classList.remove(classes.scrolled)
        })

    },[])

    const [save,setSave] = useState<boolean>(null)

    useEffect(() => {

        setPatrick(currentPatient)

    }, [currentPatient])

    useEffect(()=>{
        console.log(focused)
    })
    let[isVisible,setIsVisible] = useState<boolean>(false)

    useEffect(()=>{
        if(currentPatient && !focused && !save)  {
            document.querySelector(`.${classes.data} h2:first-child`).textContent = `${currentPatient?.lastName} ${currentPatient?.firstName} ${currentPatient?.middleName}`
            document.querySelector(`.${classes.data} > div h4:first-child div`).textContent = currentPatient.dateOfBirth
            document.querySelector(`.${classes.data} > div h4:last-child div`).textContent = currentPatient.residence
        }
    },[focused])


    return (
        <>
            {/*@ts-ignore*/}
            {isVisible && <ModalWindow fn={()=>{
                dispatch({
                    type:ActionTypes.SET_FOCUSED,
                    data:false
                })
                setSave(false)
                setIsVisible(false)
            }} isVisible={isVisible} setIsVisible={setIsVisible}/>}
            <div style={{marginLeft: 270, marginTop: 80, marginRight: 20}} className={classes.main}>
                {currentPatient ? (
                    <>
                        <div className={classes.biography}>
                            <div style={{flexShrink: 0}} className={classes.avatar}>
                                <img src={'https://cdn1.vectorstock.com/i/1000x1000/58/30/patient-broken-arm-avatar-filled-outline-icon-vector-22675830.jpg'}/>
                            </div>
                            <div className={classes.data}>
                                <h2 className={classes.enclosed} contentEditable={focused ? true : false}>{patrick?.lastName} {patrick?.firstName} {patrick?.middleName}</h2>
                                <div>
                                    <h4 style={{display:'flex',}}>Date of birth:<div contentEditable={focused ? true : false} className={classes.enclosed}>      {patrick?.dateOfBirth}</div></h4>
                                    <h4 style={{display:'flex'}}>Residence: <div contentEditable={focused ? true : false} className={classes.enclosed}>{patrick?.residence}</div></h4>
                                </div>
                                <button onClick={()=>{
                                    dispatch({
                                        type:ActionTypes.SET_INFERENCE_WINDOW,
                                        data:true
                                    })
                                }} className={classes.inference}>
                                    <div>???????????? ????????????????????</div>
                                </button>
                            </div>
                            <div className={focused ? classes.editBtn + ' ' + classes.focused : classes.editBtn}>
                                <button onClick={()=>{
                                    dispatch({
                                        type:ActionTypes.SET_FOCUSED,
                                        data:true
                                    })
                                    // document.querySelectorAll(`.${classes.enclosed}`).forEach(function(field){
                                    //     field.setAttribute('contentEditable','true')
                                    //     console.log('sdlfkj')
                                    // })
                                }}><span>Edit</span></button>
                                <button onClick={()=>{
                                    setIsVisible(true)


                                }} className={classes.cancelBtn}><span><i className='bx bx-x'></i>Cancel</span></button>
                                <button onClick={()=>{
                                    // @ts-ignore

                                    updatePatientActionCreator({
                                        residence:document.querySelector(`.${classes.data} > div > h4:last-child div`).textContent,
                                        dateOfBirth:document.querySelector(`.${classes.data} > div > h4:first-child div`).textContent,
                                        firstName: document.querySelector(`.${classes.data} h2`).textContent.split(' ')[1],
                                        id: currentPatient.id,
                                        lastName: document.querySelector(`.${classes.data} h2`).textContent.split(' ')[0],
                                        middleName: document.querySelector(`.${classes.data} h2`).textContent.split(' ')[2],
                                    })
                                    // updatePatientActionCreator(patrick)
                                    dispatch({
                                        type:ActionTypes.SET_FOCUSED,
                                        data:false
                                    })
                                    setSave(true)
                                }} className={classes.saveBtn}><i className='bx bx-download'></i><span>Save</span></button>

                            </div>
                        </div>
                        <div style={{marginTop: 20}}>
                            <h2>???????????? ??????????????????</h2>
                            <div className={classes.conclusionsList}>
                            {
                                state.conclusions.map(conclusione=>{
                                    return <div style={{
                                    }} onDoubleClick={()=>{
                                        getPatientInferenceByIdActionCreator(conclusione.id)
                                        dispatch({
                                            type:ActionTypes.SET_INFERENCE_WINDOW,
                                            data:true
                                        })
                                    }
                                    }>
                                        <h4>???????????????????? {conclusione.id}</h4>
                                    </div>
                                })
                            }
                            </div>
                        </div>


                    </>
                ) : <h1>Please Choose a patient</h1>}
            </div>
            <div onClick={e => {
                scrollTo(0, 0);
            }} className={classes.scrollToTop}>
                <span><i className='bx bx-up-arrow-alt'></i></span>
            </div>
        </>
    )
}
export default UserPage
