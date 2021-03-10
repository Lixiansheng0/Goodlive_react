import { combineReducers } from "redux"
import city from "./city"
import login from "./login"
import collect from "./collect"

const rootReducer = combineReducers({
    city,
    login,
    collect
})

export default rootReducer