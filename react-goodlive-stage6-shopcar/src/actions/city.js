import { INIT_CITY,CHANGE_CITY } from "../constants"

export function initCity(city){
    return{
        type:INIT_CITY,
        city  // {cityName:"上海"}
    }
}

export function changeCity(city){
    return{
        type:CHANGE_CITY,
        city
    }
}