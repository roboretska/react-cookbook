const getAllRecipes = () =>({
    type: 'GET_ALL_SUCCESS'
});

const getPecipeById = () =>({
    type: 'GET_RECIPE_SUCCESS'
});

const addRecipe = () =>({
    type: 'ADD_RECIPE_SUCCESS'
});

const deleteRecipe = () =>({
    type: 'DELETE_RECIPE_SUCCESS'
});