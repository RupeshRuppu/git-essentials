import { createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import IceCreamReducer from "./reducers/IceCreamReducer";
import logger from "redux-logger";

const storeState = {
	counterReducer: CounterReducer,
	iceCreamReducer: IceCreamReducer,
};
type GetReducedState<T> = {
	[P in keyof T]: T[P] extends (...args: any) => infer R ? R : never;
};
export type StoreState = GetReducedState<typeof storeState>;
const combinedReducers = combineReducers(storeState);

const middlewares = [logger];

export const store = createStore(
	combinedReducers,
	applyMiddleware(...middlewares)
);
export type Dispatch = typeof store.dispatch;
