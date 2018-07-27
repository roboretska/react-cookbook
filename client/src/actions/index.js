export const getAllRecipes = () =>({
    type: 'GET_ALL'
});

export const getPecipeById = id =>({
    type: 'GET_RECIPE_SUCCESS',
    id: id
});

export const addRecipe = data =>({
    type: 'ADD_RECIPE',
    payload: data
});

export const editRecipe = (id, data) =>({
    type: 'EDIT_RECIPE_SUCCESS',
    id: id,
    data: data
});

export const deleteRecipe = id =>({
    type: 'DELETE_RECIPE',
    id: id
});



