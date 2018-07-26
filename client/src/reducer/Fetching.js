const setFetching = (state = false, action) => {
    switch(action.type) {
        case 'GET_ALL':
        case 'ADD_RECIPE':
        case 'EDIT_RECIPE':
        case 'SET_RATE':
        case 'DELETE_RECIPE':
        case 'VIEW_RECIPE':
            return true;
        case 'FETCH_ALL_RECIPES_SUCCESS':
        case 'ADD_RECIPE_SUCCESS':
        case 'EDIT_RECIPE_SUCCESS':
        case 'SET_RATE_SUCCESS':
        case 'DELETE_RECIPE_SUCCESS':
        case 'VIEW_RECIPE_SUCCESS':
        case 'FETCH_ALL_RECIPES_FAILED':
        case 'ADD_RECIPE_FAILED':
        case 'EDIT_RECIPE_FAILED':
        case 'SET_RATE_FAILED':
        case 'DELETE_RECIPE_FAILED':
        case 'VIEW_RECIPE_FAILED':
        default:
            return false
    }
};

export default setFetching