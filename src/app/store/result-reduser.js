const defaultState = { result: 0 }

export const ADD_MONEY="ADD_MONEY"
export const ASYNC_ADD_MONEY="ASYNC_ADD_MONEY"
export const GET_MONEY="GET_MONEY"
export const ASYNC_GET_MONEY="ASYNC_GET_MONEY"

export const resultReduser = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MONEY: return { ...state, result: state.result + action.payload }
        case GET_MONEY: return { ...state, result: state.result - action.payload }
        default:
            return state
    }
} 

export const addMoneyAction=(payload)=>({type:ADD_MONEY, payload})
export const asyncAddMoneyAction=(payload)=>({type:ASYNC_ADD_MONEY, payload})//не работает
export const getMoneyAction =(payload)=>({type:GET_MONEY , payload})
export const asyncGetMoneyAction=(payload)=>({type:ASYNC_GET_MONEY, payload})//не рабоотает