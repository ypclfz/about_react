import React, {Component} from 'react'

class Control extends Component {

	render () {
		const user = this.props.user === 1 ? '×' : '○'; 

		return (<div style={{ textAlign: 'left', paddingLeft: 80 }}>
			<div><span>当前用户：<span style={{ fontSize: 20 }}>{ user }</span> </span></div>
			<div style={{ marginTop: 10 }}><button type="button" onClick={this.props.clear}>重新开始</button></div>
		</div>)
	}
}

export default Control