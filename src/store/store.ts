import {combineReducers, createStore} from "redux";
import {mainReducer} from "./mainReducer";
const rootReducer = combineReducers({
    mainReducer
})
export const store = createStore(rootReducer)
