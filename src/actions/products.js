import { GET_ALL_PRODUCTS, SET_ALL_PRODUCTS, ADD_TO_CART, SELECT_BRANDS, SELECT_COLORS } from "../constants/products";

export const getAllProducts = data => {
    const action = {
        type: GET_ALL_PRODUCTS,
        data
    };
    return action;
};

export const setAllProducts = data => {
    const action = {
        type: SET_ALL_PRODUCTS,
        data
    };
    return action;
};

export const addToCart = data => {
    const action = {
        type: ADD_TO_CART,
        data
    };
    return action;
};


export const selectBrands = data => {
    const action = {
        type: SELECT_BRANDS,
        data
    };
    return action;
};

export const selectColors = data => {
    const action = {
        type: SELECT_COLORS,
        data
    };
    return action;
};




