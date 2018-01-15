/**
 * 天国快递 reducer
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-08 11:33:05
 */

import {handleActions} from 'redux-actions';

export const HeavenExpress = handleActions({
    REQUEST_DATAS: (state, action) => ({
        ...state,
        isFetching: true
    }),
    RECEIVE_DATAS: (state, action) => ({
        ...state,
        isFetching: false,
        data: action.payload
    })
}, {
    isFetching: true,
    data: []
});



