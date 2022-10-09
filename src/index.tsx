import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store/store";
const root = ReactDOM.createRoot(
    document.querySelector('#root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)
