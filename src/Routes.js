import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/login/login';


export default () => (
	<BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
        </Switch>
	</BrowserRouter>
);
