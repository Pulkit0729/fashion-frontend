import { SHOP_DETAILS_Fail, SHOP_DETAILS_REQUEST, SHOP_DETAILS_SUCCESS, SHOP_LIST_Fail, SHOP_LIST_REQUEST, SHOP_LIST_SUCCESS } from "../constant/shopConstant";

export const shopListReducer=( state={
    loading: true,
    shops:[]}, action)=>{
    switch(action.type){
        case SHOP_LIST_REQUEST:
            return {loading: true}
        case SHOP_LIST_SUCCESS:
            return {
                loading: false,
                shops: action.payload}
        case SHOP_LIST_Fail:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};
export const shopDetailsReducer=( state={
    loading: true,
    shops:[]}, action)=>{
    switch(action.type){
        case SHOP_DETAILS_REQUEST:
            return {loading: true}
        case SHOP_DETAILS_SUCCESS:
            return {
                loading: false,
                shops: action.payload}
        case SHOP_DETAILS_Fail:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};