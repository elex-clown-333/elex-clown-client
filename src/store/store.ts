import {applyMiddleware, combineReducers, createStore} from "redux";
import {mainReducer} from "./mainReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    mainReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))
export type RootStateType = ReturnType<typeof rootReducer>
