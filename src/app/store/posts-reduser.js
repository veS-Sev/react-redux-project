

const defaultState={
    posts:[]
}

export const GET_POSTS="GET_POSTS"
export const FETCH_GET_POSTS="FETCH_GET_POSTS"
export const REMOVE_POST="REMOVE_POST"

export const postsReduser=(state=defaultState,action)=>{
switch(action.type){
    case GET_POSTS:return{...state, posts:[...state.posts, ...action.payload]}
    case REMOVE_POST:return{...state, posts:[...state.posts.filter(post=> post.id!=action.payload)]}
    default:
        return state
}
}

export const getPostsAction=(payload)=>({type:GET_POSTS, payload})
export const fetchGetPostsAction=()=>({type:FETCH_GET_POSTS}) 