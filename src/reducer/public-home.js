/**
 * 公众家园 reducer
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-08 10:41:52
 */

import {handleActions} from 'redux-actions';

export const PublicHome = handleActions({
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

