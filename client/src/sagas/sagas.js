import {call, put} from 'redux-saga/effects'
import api from '../api'

export default function* getAllRecipes(action){
    try{
        const recipes = yield call(api.getAll);
        yield put({
            type: 'GET_ALL_SUCCESS',
            recipes : recipes.data
        });

    }
    catch (e) {

    }
}