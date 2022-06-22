import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { orderReducer } from "./orderReducer";
import { cashReducer } from "./cashReducer";
import { pizzaReducer } from "./pizzaReducer";
import { sushiReducer } from './sushiReducer';
import thunk from "redux-thunk";
import { snacksReducer } from "./snacksReducer";
import { drinksReducer } from "./drinksReducer";

const rootReducers = combineReducers({
    orders: orderReducer,
    cash: cashReducer,
    pizza: pizzaReducer,
    sushi: sushiReducer,
    snacks: snacksReducer,
    drinks: drinksReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));