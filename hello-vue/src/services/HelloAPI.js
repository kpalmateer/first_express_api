import axios from "axios";

let base = 'api'

// provide a function with the name getHelloMessage
export default {
    getHelloMessage() {
        // this is the axios call, which makes a get request to the api
        // the response will be decoded into json
        return axios.get(base).then(response => {
            return response.data
        })
    }
}