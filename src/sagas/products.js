import {
    call,
    put,
    select,
    takeLatest,
} from 'redux-saga/effects';

import {setAllProducts} from '../actions/products';
import {GET_ALL_PRODUCTS, SELECT_BRANDS, SELECT_COLORS} from '../constants/products';
import api from '../utils/api';


export function* getAllProducts() {
    try {
        const data = yield select(state => state.products.searchObject);

        let search_string = '';
        if( data !== undefined && Object.keys(data).length > 0) {
            Object.entries(data).forEach(([key, value]) => {
                search_string += `${key}=${value}&`;
            })
        }
        const apiData = yield call(api.products.fiterBy, search_string);

        if(apiData) {
            yield put(setAllProducts(apiData.data));
        }

    } catch (err) {
        console.log(err);
    }
}

export function* getFilteredProducts() {
    try {
        const searchObject = yield select(state => state.products.searchObject);
        let search_string = '';
        if( searchObject !== undefined && Object.keys(searchObject).length > 0) {
            Object.entries(searchObject).forEach(([key, value]) => {
                search_string += `${key}=${value}&`;
            })
        }
        const selectedBrands = yield select(state => state.products.selectedBrands);
        const filterByBrands = selectedBrands.join();

        if(filterByBrands.length > 0){
            search_string += `brand=${filterByBrands}&`;
        }

        const selectedColors = yield select(state => state.products.selectedColors);
        const filterByColors = selectedColors.join();

        if(filterByColors.length > 0){
            search_string += `colour=${filterByColors}&`;
        }

        const apiData = yield call(api.products.fiterBy, search_string);

        if(apiData) {
            yield put(setAllProducts(apiData.data));
        }

    } catch (err) {
        console.log(err);
    }
}

export const productsSaga = [
    takeLatest(GET_ALL_PRODUCTS, getAllProducts),
    takeLatest(SELECT_BRANDS, getFilteredProducts),
    takeLatest(SELECT_COLORS, getFilteredProducts),
];
