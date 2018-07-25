import axios from 'axios';
import config from "../config/config";

// export default axios({
//     url: config.baseURL + '/api/recipes',
//     method: "get"}
// ).then()

export default {
    getAll(callback){
        return axios.get(`${config.baseURL}/api/recipes`)
            .then(res=>{callback(res.data);
            console.log(res.data)})
            .catch(err=>console.log(err));
    }
}