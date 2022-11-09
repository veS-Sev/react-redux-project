const defaultState = { result: 0 }
export const resultReduser = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_MONEY": return { ...state, result: state.result + action.payload }
        case "GET_MONEY": return { ...state, result: state.result - action.payload }
        default:
            return state
    }
} 