import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import { connectRouter, routerMiddleware } from 'connected-react-router'

import history from './history';

import reducer from '../reducer'
import {rootSaga} from '../sagas';

const initialState = {allRecipes:[]};

const sagaMiddleware = createSagaMiddleware();



export default () =>{
    const store = createStore(
        connectRouter(history)(reducer),
        initialState,
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        ));

    store.getState();
    sagaMiddleware.run(rootSaga);
    return store;
};