import qs from "querystring"

export function httpGet(url){
    const result = fetch(url);
    return result;
}


export function httpPost(url,data){
    const result = fetch(url,{
        method:"post",
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify(data)
    })

    return result;
}