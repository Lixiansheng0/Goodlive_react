import { LOGIN } from "../constants"

const initState = {};

export default function login(state = initState,action){
    switch(action.type){
        case LOGIN:
            return action.data; // { username:"iwen" }
        default:
            return state;
    }
}