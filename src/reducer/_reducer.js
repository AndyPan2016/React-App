/**
 * reducer
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-03 10:54:49
 */

import {combineReducers} from 'redux';

import { Remember } from './remember';
import { PublicHome } from './public-home';
import { HeavenExpress } from './heaven-express';
import { My } from './my';
import { Login } from './login';
import { HomeDetail } from './home-detail';
import { HomeSet } from './home-set';
import { Test } from './test';

export const rootReducer = combineReducers({
	Remember,
	PublicHome,
	HeavenExpress,
	My,
	Login,
	HomeDetail,
	HomeSet,
	Test
});

