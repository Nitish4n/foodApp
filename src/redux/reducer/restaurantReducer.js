import {STORE_NEARBY, STORE_RESTAURANT_DETAILS} from '../reduxConstant';
const initialState = {
    nearBy: [],
    details: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case STORE_NEARBY:
            return { ...state, nearBY: payload }
        case STORE_RESTAURANT_DETAILS:
            return {
                ...state,
                details: payload
            }
        default:
            return state
    }
}
