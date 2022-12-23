import Axios from "axios";
import { SHOP_LIST_Fail, SHOP_LIST_REQUEST, SHOP_LIST_SUCCESS, SHOP_DETAILS_REQUEST, SHOP_DETAILS_SUCCESS, SHOP_DETAILS_Fail } from "../constant/shopConstant"

export const listShops =()=>async(dispatch) => {
    dispatch({
        type: SHOP_LIST_REQUEST
    });
    try {
        const{data} =await Axios.get('/api/rewari');
        
        dispatch({
            type: SHOP_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SHOP_LIST_Fail,
            payload:error.message
        })
        
    }
};

export const detailsShop= (shopId) =>async(dispatch) => {
    dispatch({
        type: SHOP_DETAILS_REQUEST,
        payload:shopId,
    });
    try {
        const{data} =await Axios.get(`/api/rewari/${shopId}`);
        
        dispatch({
            type: SHOP_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SHOP_DETAILS_Fail,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
};