const defaultState = {
    snacks: []
} 

const GET_SNACKS = "GET_SNACKS";

export const snacksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SNACKS:
            return {...state, snacks: [...state.snacks, ...action.payload]}
        default:
            return state;
    }
}

export const getSnacksAction = (payload) => ({type: GET_SNACKS, payload});