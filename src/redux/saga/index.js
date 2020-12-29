import {all} from 'redux-saga/effects'
import Restaurant from './Restaurant';


export function* rootSaga () {
    yield all([
        Restaurant(),
    ])
}