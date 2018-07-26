import {call, put} from 'redux-saga/effects'
import api from '../api'

export  function* getAllRecipes(action){
    try{
        const recipes = yield call(api.getAll);
        yield put({
            type: 'GET_ALL_SUCCESS',
            payload : {
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

export  function* addRecipe(action){
    try{
        const recipes = yield call(api.getAll, action.payload);
        yield put({
            type: 'ADD_RECIPE_SUCCESS',
            payload : {
                all: recipes.data
            }
        });

    }
    catch (e) {
        yield put({
            type: 'ADD_RECIPE_FAILED'
        });
    }
}