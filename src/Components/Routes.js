import React from 'react';
import Home from './Home';
import { Route } from 'react-router-dom';

const Routes = () => {
	return <Route path="/" component={Home} />;
};

export default Routes;
