import {all, takeLatest} from 'redux-saga/effects'

import saga from './sagas'

export function* rootSaga(){
    yield all([takeLatest("GET_ALL_SUCCESS", saga)]);
}