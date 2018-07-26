
const initialState = {
    byId: {},
    allRecipes: [],

}


const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_SUCCESS': {
            console.log('GET_ALL_SUCCESS');
            return action.payload.all;


        }
        case 'GET_RECIPE_SUCCESS': {
            return console.log('GET_RECIPE_SUCCESS');
        }
        case 'ADD_RECIPE_SUCCESS': {
            return console.log('ADD_RECIPE_SUCCESS');
        }
        case 'EDIT_RECIPE_SUCCESS': {
            return console.log('EDIT_RECIPE_SUCCESS');
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