import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'

import { connectRouter, routerMiddleware } from 'connected-react-router'


import reducer from '../reducer'
import {rootSaga} from '../sagas';

// const history = createBrowserHistory();


const sagaMiddleware = createSagaMiddleware();



export default () =>{
    const store = createStore(
        connectRouter(history)(reducer),
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        ));

    sagaMiddleware.run(rootSaga);
    return store;
};