const reducer = (state=0, action) => {
    switch (action.type) {
        case 'GET_ALL_SUCCESS': {
           return console.log('GET_ALL_SUCCESS');
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
            return console.log("Sorry")
        }
    }
};