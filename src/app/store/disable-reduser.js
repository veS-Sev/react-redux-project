const defaultState={
    disableAdd:false,
    disableGet:false,
}

export const disableReduser=(state=defaultState,action)=>{
switch(action.type){
    case "DISABLE_ADD": return{...state, disableAdd:action.payload}
    case "DISABLE_GET": return{...state, disableGet:action.payload}
    default:
        return state
}
}