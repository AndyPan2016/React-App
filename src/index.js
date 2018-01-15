
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//import NoFound from './pages/404';
import Remember from './pages/remember';
import PublicHome from './pages/public-home';
import HeavenExpress from './pages/heaven-express';
import My from './pages/my';
import Login from './pages/login';
import HomeDetail from './pages/home-detail';
import HomeSet from './pages/home-set';
import Test from './pages/test';

import './index.less';

const supportsHistory = 'pushState' in window.history

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter forceRefresh={!supportsHistory}>
			<div>
		        <Redirect from="/" to="/login" />
		        <Route path="/test" component={Test} ></Route>
		        <Route path="/login" component={Login} ></Route>
		        <Route path="/remember" component={Remember} ></Route>
		        <Route path="/publichome" component={PublicHome} ></Route>
		        <Route path="/heavenexpress" component={HeavenExpress} ></Route>
		        <Route path="/my" component={My} ></Route>
		        <Route path="/homedetail" component={HomeDetail}></Route>
		        <Route path="/homeset" component={HomeSet}></Route>
		        {/*<Route component={NoFound}/>*/}
	        </div>
	    </BrowserRouter>
	</Provider>), document.getElementById('root'));

