import React, {FC} from 'react'
import classes from '../../styles/ModalWindow.module.scss'
const ModalWindow:FC = function({isVisible,setIsVisible,fn}:any){
    return (
        <div className={classes.base}>
            <div>
                <h3 style={{width:'70%'}}>Це скасує всі ваші зміни. Ви впевнені?</h3>
                <div>
                <button onClick={fn}>Так</button>
                <button onClick={()=>setIsVisible(false)}>Ні</button>
                </div>
            </div>
    </div>

    )
}
export default ModalWindow
