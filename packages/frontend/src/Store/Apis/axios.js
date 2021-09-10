import axios from 'axios';


const Axios = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5*1000,
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8'
    }
});


export default Axios;