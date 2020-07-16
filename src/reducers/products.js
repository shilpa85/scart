import { GET_ALL_PRODUCTS, SET_ALL_PRODUCTS, ADD_TO_CART, SEARCH_TERM, SELECT_BRANDS, SELECT_COLORS, RESET } from "../constants/products";

const initialState = {
    productList: [],
    productsInCart: [],
    cartCount: 0,
    searchObject: {},
    searchTerm: "",
    selectedBrands: [],
    selectedColors: []
};

export default (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                searchObject: action.data,
            };

        case SET_ALL_PRODUCTS:
                return {
                    ...state,
                    productList: action.data,
                };

        case ADD_TO_CART:
            return {
                ...state,
                cartCount: action.data,
            };
        
        case SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.data,
            };
        
        case SELECT_BRANDS:
            return {
                ...state,
                selectedBrands: action.data,
            };

        case SELECT_COLORS:
            return {
                ...state,
                selectedColors: action.data,
            };

        case RESET:
            return {
                ...state,
                filterBy: {},
            };      
            
        default:
            return state;
    }
};
