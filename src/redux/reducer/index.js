import {combineReducers} from 'redux';

import CartReducer from './cartReducer';
import LocationReducer from './locationReducer';
import RestaurantReducer from './restaurantReducer';

const rootReducer = combineReducers({
    cart: CartReducer,
    geoLocation: LocationReducer,
    restaurant: RestaurantReducer
});


export default rootReducer;