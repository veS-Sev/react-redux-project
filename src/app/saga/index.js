import {all} from 'redux-saga/effects'
import {postsWatcher} from './postSaga'
import {moneyWatcher} from './resultSaga'

export function* rootWtcher(){
    yield all([postsWatcher(),moneyWatcher()])
}