/**
 * 我的 reducer
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-09 15:03:57
 */

import {handleActions} from 'redux-actions';

export const My = handleActions({
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

