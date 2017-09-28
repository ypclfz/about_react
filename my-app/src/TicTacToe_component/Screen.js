import React, {Component} from 'react'
import Block from './Block.js'

class Screen extends Component {
	constructor (props) {
		super(props);
		this.state = {
			screen_arr: [
				[0,0,0],
				[0,0,0],
				[0,0,0],
			],
		};
	}

	blockClick = (t, p) => {
		if(t === 0) {
			const arr = this.state.screen_arr;
			const user = this.props.user;
			const position = p.split('-');
			
			console.log(user, position);

			arr[position[0]][position[1]] = user;
			this.setState({
				'screen_arr': arr,
			});
			this.props.toggleUser();
			const r = this.checkResult(t, p);
			if(r) {
			 	this.props.setResult(r);
			}
			

		}
	}

	checkResult = (t,p) => {
		const arr = this.state.screen_arr;
		let flag = true;
		
		//水平判断
		check([0,2], [p[1], p[1]]);
		//纵向判断
		check([p[0],p[0]], [0,2]);
		//左上判断
		check([0,2], [2,0]);
		//左下判断
		check([0,2], [0,2]);
		
		if(flag) {
			return 0;
		}else {
			return t;
		}

		function check (xArea, yArea) {
			if(flag) {	
				let count = 1;

				const x = xArea[0] - xArea[1];
				const y = yArea[0] - yArea[1];
				
				run(x, y);
				run(-x, -y);

				if(count === 3) {
					flag = false;
				}
			}

			function run (xs, ys, now = p, count = 0) {
				const now_new = [...now];
				
				now_new[0] += xs;
				now_new[1] += ys;
				
				if(now_new[0] >= xArea[0] && now_new[0] <= xArea[1] && now_new[1] >= yArea[0] && now_new[1] <= yArea[1] && arr[now_new[0]][now_new[1]] === t){
					count++;
					run(xs, ys, now_new, count); 	
				}
			}
		}

	}

	clear = _=>{
		this.setState({
			'screen_arr': [
				[0,0,0],
				[0,0,0],
				[0,0,0],
			]
		})
	}

	render () {
		const screen = this.state.screen_arr.map((d, i)=>{
			const row = d.map( (d2, i2)=>
				<Block type={ d2 } blockClick={this.blockClick} position={`${i}-${i2}`} key={i2} />
			);
			
			return <div className="row" key={i}>{ row }</div>
		});

		return (
			<div style={{padding: 40}}>{ screen }</div>
		)
	}
}

export default Screen