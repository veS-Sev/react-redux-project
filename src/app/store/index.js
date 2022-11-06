import { createStore, combineReducers } from 'redux';
import {cashReducer} from './cash-reducer';
import { customerReducer } from './customer-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReduser=combineReducers({
    cash: cashReducer, 
    customer: customerReducer
})
export const store = createStore(rootReduser,  composeWithDevTools());