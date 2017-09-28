import React, {Component} from 'react'
const typeMap = new Map([
	[0, ''],
	[1, '×'],
	[2, '○'],
])
class Screen extends Component {
	
	handleClick = _=>{
		this.props.blockClick(this.props.type, this.props.position);
	}

	render () {
		const style = {
			float: 'left',
			borderWidth: 1,
			borderColor: '#000',
			borderStyle: 'solid',
			width: 60,
			height: 60,
			cursor: 'pointer',
			fontSize: 40,
		}

		const content = typeMap.get(this.props.type); 
		return <div style={style} onClick={this.handleClick}>{content}</div>
	}
}

export default Screen