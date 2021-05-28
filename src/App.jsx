import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import { Button, DatePicker, List } from 'antd-mobile';

import routes from './routes';

function App(props) {
	const [count, setCount] = useState(0);
	console.log(props);
	const date = new Date();
	return (
		<div className="App">
			<Router>
				<Route exact path="/home" component={Home} />
				<Route path="/about" component={About} />
			</Router>
		</div>
	);
}

export default App;
