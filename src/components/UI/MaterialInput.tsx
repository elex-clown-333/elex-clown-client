import React, {useEffect} from 'react';
import {IPropsInput} from "../../types/types";
import classes from '../../styles/MaterialInput.module.scss'
const MaterialInput = (props) => {
    const info:IPropsInput = props.info
    useEffect(()=>{
        console.log(document.querySelectorAll(`.${classes.m_input}`))
        console.log(document.querySelector(`.${classes.search}`))
        document.querySelectorAll(`.${classes.m_input} input`).forEach(function(input:HTMLInputElement){
            input.addEventListener('focusin',function(){
                input.parentElement.classList.add(`${classes.focused}`)
            })
            input.addEventListener('focusout',function(){
                if(input.value.length==0) {
                    input.parentElement.classList.remove(`${classes.focused}`)
                }
            })
        })
        // document.querySelector(`.${classes.m_input} input`).addEventListener('focusin',function(e){
        //     document.querySelector(`.${classes.m_input}`).classList.add(classes.focused)
        // })
        // document.querySelector(`.${classes.m_input} input`).addEventListener('focusout',function(e){
        //     document.querySelector(`.${classes.m_input}`).classList.remove(classes.focused)
        // })
    },[])


    return (
        <div className={classes.m_input}>
            <input value={info.value} type={info.type} onChange={info.controlFn}/>
            <div className={classes.placeholder}>{info.placeholder}</div>
            {/*{React.createElement('button',[*/}

            {/*    {*/}

            {/*    }*/}
            {/*],'hrrin')}*/}
            {props.children}
        </div>
    );
};

export default MaterialInput;
