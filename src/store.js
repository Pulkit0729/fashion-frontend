
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { shopDetailsReducer, shopListReducer } from './reducers/shopReducer';
const initialState={};
const reducer=combineReducers({
    shopList: shopListReducer,
    shopDetail: shopDetailsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore( reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
export default store;