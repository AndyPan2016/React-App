/**
 * 记住 reducer
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-05 17:05:08
 */

import {handleActions} from 'redux-actions';

export const Remember = handleActions({
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

