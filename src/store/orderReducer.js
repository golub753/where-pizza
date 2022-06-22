const defaultState = {
    orders: [],
}

const ADD_ORDER = "ADD_ORDER";
const INCREMENT  = "INCREMENT";
const DECREMENT  = "DECREMENT";

export const orderReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_ORDER: {
            const inBasket = state.orders.find(order => (order.id === action.payload.id) && (order.varient === action.payload.varient));
            if (inBasket) {
                inBasket.counter++;
                const initialCost = action.payload.initialPrice;
                inBasket.price = +(initialCost * inBasket.counter).toFixed(2);
                return {...state};
            } else {
                return {...state, orders: [...state.orders, action.payload]}
            }
        }
        case INCREMENT: {
            const inBasket = state.orders.find(order => (order.id === action.payload.id) && (order.varient === action.payload.varient));
            inBasket.counter++;
            const initialPrice = action.payload.initialPrice;
            inBasket.price = +(initialPrice * inBasket.counter).toFixed(2);
            return {...state, orders: [...state.orders]};
        }
        case DECREMENT: {
            const inBasket = state.orders.find(order => (order.id === action.payload.id) && (order.varient === action.payload.varient));
            inBasket.counter--;
            const initialPrice = action.payload.initialPrice;
            inBasket.price = +(inBasket.price - initialPrice).toFixed(2);
            if (inBasket.counter === 0) {
                const newOrders = state.orders.filter(order => !order.counter <= 0);
                return {...state, orders: [...newOrders]}
            }
            return {...state, orders: [...state.orders]};
        }
        default:
            return state;
    }
}

export const addOrderAction = (payload) => ({type: ADD_ORDER, payload});
export const inrementrAction = (payload) => ({type: INCREMENT, payload});
export const decrementOrderAction = (payload) => ({type: DECREMENT, payload});