export const getAllRecipes = () =>({
    type: 'GET_ALL'
});

export const getRecipeById = id =>({
    type: 'GET_RECIPE',
    id: id
});

export const addRecipe = data =>({
    type: 'ADD_RECIPE',
    payload: data
});

export const editRecipe = (id, data) =>({
    type: 'EDIT_RECIPE',
    id: id,
    data: data
});

export const deleteRecipe = id =>({
    type: 'DELETE_RECIPE',
    id: id
});




