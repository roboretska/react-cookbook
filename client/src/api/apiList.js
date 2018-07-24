import axios from 'axios';
import config from "../config/config";

// export default axios({
//     url: config.baseURL + '/api/recipes',
//     method: "get"}
// ).then()

export default {
    getAll(){
        return axios.get(`${config.baseURL}/api/recipes`).then(data=>console.log(data.data)).catch(err=>console.log(err))
    }
}