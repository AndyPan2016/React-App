/**
 * store.js
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-03 10:58:45
 */

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from './reducer/_reducer';

const middleware = [thunk];
export const store = createStore(rootReducer, compose(
	applyMiddleware(...middleware)
));



