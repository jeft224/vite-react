import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import routes from './routes';

function App(props) {
	return (
		<div className="App">
			<Router>
				<Route exact path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Redirect to={'/home'} from="/"></Redirect>
			</Router>
		</div>
	);
}

export default App;
