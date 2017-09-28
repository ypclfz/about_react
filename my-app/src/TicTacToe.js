import React, { Component } from 'react';
import Screen from './TicTacToe_component/Screen.js'
import Control from './TicTacToe_component/Control.js'


class TicTacToe extends Component {
	constructor (props) {
		super(props);
		this.state = {
			current_user: 1,
		}
	}

	toggleUser = _=>{
		
		this.setState({
			'current_user': this.state.current_user === 1 ? 2 : 1,
		})
	}

	clear = _=>{
		this.setState({
			'current_user': 1,
		})
		this.refs.screen.clear();
	}

	render () {
		const user = this.state.current_user;
		return (
			<div>
				<Screen user={ user } toggleUser={this.toggleUser} ref="screen"/>
				<Control user={ user } clear={this.clear}/>
			</div>
		)
	}
}

export default TicTacToe