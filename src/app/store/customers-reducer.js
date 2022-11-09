const ADD_CUSTOMER="ADD_CUSTOMER";
const ADD_MANY_CUSTOMER="ADD_MANY_CUSTOMER";
const REMOVE_CUSTOMERS="REMOVE_CUSTOMERS";

const defaultState={
  customers:[]
}

export const customersReducer = (state = defaultState, action)=>{
    switch (action.type) {
      case ADD_CUSTOMER:return {...state,customers:[...state.customers,action.payload]}
      case ADD_MANY_CUSTOMER:return {...state,customers:[...state.customers, ...action.payload]}
      case REMOVE_CUSTOMERS:return {...state,customers:state.customers.filter((customer)=>customer.id != action.payload)}
      default:
        return state
    }
  }
//action creaters
  export const addCustomerAction=(payload)=>({type:ADD_CUSTOMER, payload})
  export const addManyCustomerAction=(payload)=>({type:ADD_MANY_CUSTOMER, payload})
  export const removeCustomer=(payload)=>({type:ADD_CUSTOMER, payload})