import base from "./base"
import { httpGet } from "../utils/http"


const api = {
    getHomehot1(params){
        return httpGet(base.homehot1+"?city="+params.city);
    },
    getHomehot2(params){
        return httpGet(base.homehot2+"?city="+params.city);
    },
    getSearch(params){
        return httpGet(base.search+"?keywords="+params.keywords+"&city="+params.city+"&page="+params.page)
    }
}

export default api;