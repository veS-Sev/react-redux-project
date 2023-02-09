 import {put, takeEvery, call} from 'redux-saga/effects'
 import { getPostsAction, FETCH_GET_POSTS} from '../store/posts-reduser';

 const fetchPostsFromApi=()=>fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
 function* fetchGetPostsWorker(){
    const data = yield call(fetchPostsFromApi);
    const json = yield call(()=>new Promise(res=>res(data.json())))
    yield put(getPostsAction(json))
 }


export function* postsWatcher(){
    yield takeEvery(FETCH_GET_POSTS, fetchGetPostsWorker)
 }