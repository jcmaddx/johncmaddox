import React from 'react'
import { Route, IndexRoute } from 'react-router';
import MainPage from './components/MainPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
	<Route path="/" component={MainPage}>
    <IndexRoute component={MainPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;