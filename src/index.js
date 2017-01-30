import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create a component
class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {};
		
	}

	render() {
		return (
			<div>
				This will be something
			</div>
		);
	}
}

// Take the component and put in the DOM
ReactDOM.render(
	<App />, 
	document.querySelector('.container')
);