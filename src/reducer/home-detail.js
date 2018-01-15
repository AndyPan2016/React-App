/**
 * 家园详情 reducer
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-12 10:11:18
 */

import {handleActions} from 'redux-actions';

export const HomeDetail = handleActions({
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
