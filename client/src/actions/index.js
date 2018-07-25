export const getAllRecipes = () =>({
    type: 'GET_ALL'
});

export const getPecipeById = id =>({
    type: 'GET_RECIPE_SUCCESS',
    id: id
});

export const addRecipe = data =>({
    type: 'ADD_RECIPE_SUCCESS',
    data: data
});

export const deleteRecipe = id =>({
    type: 'DELETE_RECIPE_SUCCESS',
    id: id
});