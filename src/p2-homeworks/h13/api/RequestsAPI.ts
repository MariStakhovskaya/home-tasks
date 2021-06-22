import axios from "axios";

export const requestsAPI = {
    requestPost(success: boolean){
        const promise = axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success})
        return promise
    },
}
