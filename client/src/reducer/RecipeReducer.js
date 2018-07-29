
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
            console.log('GET_RECIPE_SUCCESS');
            return action.payload.recipe

        }
        case 'ADD_RECIPE_SUCCESS': {
             console.log('ADD_RECIPE_SUCCESS');
            action.payload.prevState.push(action.payload.newRecipe);
            return action.payload.prevState;
        }
        case 'EDIT_RECIPE_SUCCESS': {
            const index = action.payload.prevState.findIndex(i => i._id ===action.payload.editedRecipeId);
            action.payload.prevState.splice(index,1,action.payload.editedRecipe);
            return action.payload.prevState;

            return state;
        }
        case 'DELETE_RECIPE_SUCCESS': {
             console.log('DELETE_RECIPE_SUCCESS');
            return action.payload.prevState.filter(item => item._id!==action.payload.deletedRecipe);
        }
        case 'FILTER_RECIPES_SUCCESS':{
            console.log('Filtering posts');
            console.log(action.keyword);
            const result = action.all.filter(item =>
                // console.log(item)
                item.title.search( new RegExp(action.keyword))!==-1
            );
            console.log(result);
            return result;
        }
        case 'SAVE_RATING_SUCCESS':{
            console.log('Save rating');
            return state;
        }
        case 'SORT_BY_RATING_SUCCESS':{
            const result = action.all.sort((a, b)=>{
               return  a.rating<b.rating
            });
            return result;
        }
        default: {
            return state;
        }
    }
};

export default reducer;