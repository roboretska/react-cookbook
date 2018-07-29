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


export const filterRecipes = keyword =>({
    type: 'FILTER_RECIPES',
    keyword: keyword
});

export const saveRating = (id, rate) =>({
    type: 'SAVE_RATING',
    id: id,
    rating: rate
});

export const sortByRating = () =>({
    type: 'SORT_BY_RATING',
});
