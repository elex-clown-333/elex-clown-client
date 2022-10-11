import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from '../styles/NavBar.module.scss'
import MaterialInput from "./UI/MaterialInput";
import classes2 from '../styles/MaterialInput.module.scss'
import {ActionTypes, IPropsInput} from "../types/types";
import {useDispatch} from "react-redux";
const NavBar = () => {
    let dispatch = useDispatch()
    const [query,setQuery] = useState<string>('')
    return (
        <nav className={classes.navBar}>
            <div className={classes.icon}>
                <img/>
            </div>

            <div className={classes.searchPatient}>
                <div className={classes.input}>
                    <div className={classes.placeholder}>
                        Знайти пацієнта
                    </div>
                    <MaterialInput info={{
                        type:'text',
                        placeholder:'Знайти пацієнта',
                        value:query,
                        controlFn:function(e:ChangeEvent<HTMLInputElement>){
                            setQuery(e.target.value)
                        }

                    } as IPropsInput}>
                        <i className={'bx bx-search-alt'+' '+classes2.search}></i>
                    </MaterialInput>
                </div>
            </div>
            <div title={'Add patient A+P'} className={classes.add}>
                <button onClick={()=>[
                    dispatch({
                        type:ActionTypes.SET_MODAL,
                        data:true
                    })
                ]}><img src={'https://cdn-icons-png.flaticon.com/512/3358/3358869.png'}/></button>
            </div>
        </nav>
    );
};

export default NavBar;
