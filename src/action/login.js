/**
 * 登录 action
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-09 15:50:43
 */

import {createAction} from 'redux-actions';

import utils from '../utils';

const requestDatas = createAction('REQUEST_DATAS');
const receiveDatas = createAction('RECEIVE_DATAS');

export const getDatas = () => async dispatch => {
    dispatch(requestDatas());
    //let data = await utils.fetch({ url: '/getresource/2' });
    let data = [{item1: '选项一', item2: '选项二'}];
    dispatch(receiveDatas(data));
};