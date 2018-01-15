/**
 * 测试 reducer
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-09 15:19:28
 */

import {handleActions} from 'redux-actions';

export const Test = handleActions({
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

