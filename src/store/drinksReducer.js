const defaultState = {
    drinks: []
} 

const GET_DRINKS = "GET_DRINKS";

export const drinksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_DRINKS:
            return {...state, drinks: [...state.drinks, ...action.payload]}
        default:
            return state;
    }
}

export const getDrinksAction = (payload) => ({type: GET_DRINKS, payload});