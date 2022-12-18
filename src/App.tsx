import React from "react";
import {store} from "./store/store";
import {Provider} from 'react-redux'
import MainPage from "./pages/MainPage";

declare global {
    interface Window {
        electron? : any
    }
}

function App(){
    return(
        <MainPage/>
    )
}
export default App
