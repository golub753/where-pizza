const defaultState = {
    pizza: []
} 

const GET_PIZZA = "GET_PIZZA";

export const pizzaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PIZZA:
            return {...state, pizza: [...state.pizza, ...action.payload]}
        default:
            return state;
    }
}

export const getPizzaAction = (payload) => ({type: GET_PIZZA, payload});