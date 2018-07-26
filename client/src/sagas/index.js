import {all, takeLatest} from 'redux-saga/effects'

import * as saga from './sagas'

export function* rootSaga(){
    yield all([
        takeLatest("GET_ALL", saga.getAllRecipes),
        takeLatest("ADD_RECIPE", saga.addRecipe)
    ]);
}