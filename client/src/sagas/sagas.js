import {call, put, select} from 'redux-saga/effects'
import api from '../api'

export function* getAllRecipes(action) {
    try {
        const recipes = yield call(api.getAll);
        yield put({
            type: 'GET_ALL_SUCCESS',
            payload: {
                all: recipes.data
            }
        });

    }
    catch (e) {
        yield put({
            type: 'GET_ALL_FAILED'
        });
    }
}

export function* addRecipe(action) {
    try {
        const prevState = yield select(state => state.recipes);
        const recipes = yield call(api.createNewRecipe, action.payload);
        yield put({
            type: 'ADD_RECIPE_SUCCESS',
            payload: {
                newRecipe: recipes.data,
                prevState: prevState
            }
        });

    }
    catch (e) {
        yield put({
            type: 'ADD_RECIPE_FAILED'
        });
    }
}

export function* deleteRecipe(action) {
    try {
        const prevState = yield select(state => state.recipes);
        const recipes = yield call(api.deleteRecipe, action.id);
        yield put({
            type: 'DELETE_RECIPE_SUCCESS',
            payload: {
                deletedRecipe: action.id,
                prevState: prevState
            }
        });

    }
    catch (e) {
        yield put({
            type: 'ADD_RECIPE_FAILED'
        });
    }
}

export function* getRecipeById(action) {
    try {
        const prevState = yield select(state => state.recipes);
        const recipes = yield call(api.getRecipeById, action.id);
        yield put({
            type: 'GET_RECIPE_SUCCESS',
            payload: {
                recipes: recipes.data,
                prevState: prevState
            }
        });

    }
    catch (e) {
        yield put({
            type: 'ADD_RECIPE_FAILED'
        });
    }
}

export function* editRecipe(action) {
    try {
        const prevState = yield select(state => state.recipes);
        const recipes = yield call(api.editRecipe, action.id, action.data);
        yield put({
            type: 'EDIT_RECIPE_SUCCESS',
            payload: {
                editedRecipe: recipes.data,
                prevState: prevState
            }
        });

    }
    catch (e) {
        yield put({
            type: 'ADD_RECIPE_FAILED'
        });
    }
}