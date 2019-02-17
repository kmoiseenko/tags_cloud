import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Home from './Home/Home';
import Tag from './Tag/Tag';

import './App.css';

const App = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/:id" component={Tag} />
			</Switch>
		</BrowserRouter>
	)
}

export default App;
