import {STORE_NEARBY, FETCH_RESTAURANT, STORE_RESTAURANT_DETAILS} from '../reduxConstant';


export const setNearByStore = (data) => {
    return {
        type: STORE_NEARBY,
        payload: data
    }
}

export const fetchRestaurantDetails = (id) => {
    return {
        type: FETCH_RESTAURANT,
        payload: id
    }
}

export const saveRestaurantDetail = (data) => {
    return {
        type: STORE_RESTAURANT_DETAILS,
        payload: data
    }
}