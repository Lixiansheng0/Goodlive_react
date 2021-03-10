import { INIT_CITY,CHANGE_CITY } from "../constants"

const initState = {
    cityName:'西安'
}

export default function city(state = initState,action){
    switch(action.type){
        case INIT_CITY:
            return state = action.city;
        case CHANGE_CITY:
            return state = action.city;
        default:
            return state;
    }
}