import{put, takeEvery} from 'redux-saga/effects'
import {addMoneyAction, getMoneyAction,ASYNC_ADD_MONEY, ADD_MONEY, ASYNC_GET_MONEY} from '../store/result-reduser'




const delay=(ms)=>new Promise(res=>setTimeout(res, ms))

function* addMoneyWorker(){
   yield delay(1000)
   yield put(addMoneyAction())
}



function* getMoneyWorker(){
    yield delay(1000)
    yield put(getMoneyAction())
}

export function* moneyWatcher(){
    yield takeEvery(ASYNC_ADD_MONEY,addMoneyWorker)
    yield takeEvery(ASYNC_GET_MONEY,getMoneyWorker)
}














