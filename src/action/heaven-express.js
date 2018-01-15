/**
 * 天国快递 action
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-08 11:34:09
 */

import {createAction} from 'redux-actions';

import utils from '../utils';

const requestDatas = createAction('REQUEST_DATAS');
const receiveDatas = createAction('RECEIVE_DATAS');

export const getDatas = () => async dispatch => {
    dispatch(requestDatas());
    //let data = await utils.fetch({ url: '/getresource/2' });
    let data = [{item1: 'C选项一', item2: 'C选项二'}];
    dispatch(receiveDatas(data));
};


