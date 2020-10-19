import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/login/login';
import navbar from './layouts/navbar.jsx';

export default () => (
	<BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/nav" exact component={navbar} />
        </Switch>
	</BrowserRouter>
);
