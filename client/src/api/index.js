import axios from 'axios';
import config from "../config/config";


export default {
    getAll(){
        return axios.get(`${config.baseURL}/api/recipes`)
    },
    createNewRecipe(data){
        return axios.post(`${config.baseURL}/api/recipes`,data)
    },
    deleteRecipe(id){
        return axios.delete(`${config.baseURL}/api/recipes/${id}`)
    },
    getRecipeById(id){
        return axios.get(`${config.baseURL}/api/recipes/${id}`)
    },
    editRecipe(id, data){
        return axios.patch(`${config.baseURL}/api/recipes/${id}`, data)
    },
    saveRating(id, data){
        console.log(data);
        return axios.patch(`${config.baseURL}/api/recipes/${id}/rating`, data)
    }
}