import { createStore, combineReducers } from 'redux';
import {cashReducer} from './cash-reducer';
import { customersReducer } from './customers-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { resultReduser } from './result-reduser';
import { disableReduser } from './disable-reduser';
const rootReduser=combineReducers({
    cash: cashReducer, 
    customers: customersReducer,
    result: resultReduser,
    disable:disableReduser,
})
export const store = createStore(rootReduser,  composeWithDevTools());