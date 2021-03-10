import { COLLECTED,UNCOLLECTED } from "../constants"

export function collect(data){
    return{
        type:COLLECTED,
        data
    }
}

export function unCollect(data){
    return{
        type:UNCOLLECTED,
        data
    }
}