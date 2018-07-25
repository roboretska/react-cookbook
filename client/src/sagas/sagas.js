import {call, select} from 'redux-saga/effects'

export default function* getAllRecipes(action){
    try{
        console.log("It's saga baby");
        const storeState = yield select(state => state);
        console.log(storeState);
    }
    catch (e) {

    }
}