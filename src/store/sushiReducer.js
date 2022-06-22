const defaultState = {
    sushi: []
} 

const GET_SUSHI = "GET_SUSHI";

export const sushiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SUSHI:
            return {...state, sushi: [...state.sushi, ...action.payload]}
        default:
            return state;
    }
}

export const getSushiAction = (payload) => ({type: GET_SUSHI, payload});