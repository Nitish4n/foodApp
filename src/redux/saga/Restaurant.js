import {all, fork, call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_RESTAURANT, STORE_RESTAURANT_DETAILS} from '../reduxConstant';
import {saveRestaurantDetail} from '../action/restaurantAction';
import {getRestaurantDetails, getRestaurantDailyMenu} from '../../utils/api';


const GetRestaurantRequest = async (id) => (
    await getRestaurantDetails(id)
    .then(details => details)
    .catch(error => error)
)

const GetRestaurantDailyMenuRequest = async (id) => (
    await getRestaurantDailyMenu(id)
    .then(menu => menu)
    .catch(error => error)
)

function* getRestaurantData(data)
{
    try{
        const getRestaurantAPIData = yield call(GetRestaurantRequest, data.payload);
        
        if(getRestaurantAPIData.status === 200) {
            yield put(saveRestaurantDetail(getRestaurantAPIData.data))
        }else{
            console.log('Looking for else restaurant details')
            console.log(getRestaurantAPIData)
        }
        
    }catch(error) {
        console.log('error details');
        console.log(error)
    }
}

export function* getRestaurantDetailSaga(){
    console.log('reached here')
    yield takeEvery(FETCH_RESTAURANT, getRestaurantData);
}


export default function* restaurantSaga() {
    yield all([
        fork(getRestaurantDetailSaga),
    ])
}