/**
 * home-set reducer
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-15 14:57:30
 */

import {handleActions} from 'redux-actions';

export const HomeSet = handleActions({
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


