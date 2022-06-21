const defaultState = {
    orders: [],
}

const ADD_ORDER = "ADD_ORDER";

export const orderReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            return {...state, orders: [...state.orders, action.payload]}
        default:
            return state;
    }
}

export const addOrderAction = (payload) => ({type: ADD_ORDER, payload});