import {all, takeLatest} from 'redux-saga/effects'

import * as saga from './sagas'

export function* rootSaga(){
    yield all([
        takeLatest("GET_ALL", saga.getAllRecipes),
        takeLatest("ADD_RECIPE", saga.addRecipe),
        takeLatest("DELETE_RECIPE", saga.deleteRecipe),
        takeLatest("GET_RECIPE", saga.getRecipeById),
        takeLatest("EDIT_RECIPE", saga.editRecipe),
        takeLatest("SAVE_RATING", saga.saveRating),
        takeLatest("SORT_BY_RATING", saga.sortByRating),
        takeLatest("FILTER_RECIPES", saga.filerRecipes)

    ]);
}
