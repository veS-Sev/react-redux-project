import { createStore, combineReducers, applyMiddleware } from 'redux';
import {cashReducer} from './cash-reducer';
import { customersReducer } from './customers-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { resultReduser } from './result-reduser';
import { disableReduser } from './disable-reduser';
import { postsReduser } from './posts-reduser';
import createSagaMiddleware from '@redux-saga/core';
import {rootWtcher} from '../saga/index'

const sagaMiddleware=createSagaMiddleware()

const rootReduser=combineReducers({
    cash: cashReducer, 
    customers: customersReducer,
    result: resultReduser,
    disable:disableReduser,
    posts:postsReduser,
})
export const store = createStore(rootReduser,  composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootWtcher)