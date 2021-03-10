import base from "./base"
import { httpGet } from "../utils/http"


const api = {
    getHomehot1(params){
        return httpGet(base.homehot1+"?city="+params.city);
    },
    getHomehot2(params){
        return httpGet(base.homehot2+"?city="+params.city);
    }
}

export default api;