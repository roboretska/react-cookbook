import api from '../api'

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL': {
            console.log('GET_ALL');
            return  state;
            // api.getAll((response)=> {
            //     state = response;
            // });

        }
        case 'GET_ALL_SUCCESS': {
            console.log('GET_ALL_SUCCESS');
            console.log(action.recipes);
            return state=action.recipes;
            // api.getAll((response)=> {
            //       state = response;
            // });

        }
        case 'GET_RECIPE_SUCCESS': {
            return console.log('GET_RECIPE_SUCCESS');
        }
        case 'ADD_RECIPE_SUCCESS': {
            return console.log('ADD_RECIPE_SUCCESS');
        }
        case 'DELETE_RECIPE_SUCCESS': {
            return console.log('DELETE_RECIPE_SUCCESS');
        }
        default: {
            return state;
        }
    }
};

export default reducer;