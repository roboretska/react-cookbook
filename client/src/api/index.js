import axios from 'axios';
import config from "../config/config";


export default {
    getAll(){
        return axios.get(`${config.baseURL}/api/recipes`)
    }
}