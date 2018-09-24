import React, { Component } from 'react';
/*
 simple list
 */
class App1 extends Component {
	state = {
		maxNo: 3,
		board: [
			{
				id: 1,
				name: 'Lee SunSin',
				title: 'If you intend to live then you die',
				date: new Date()
			},
			{
				id: 2,
				name: 'So SiNo',
				title: 'Founder for two countries',
				date: new Date()
			}
		]
	}
  
	render() {
		const { board } = this.state;
		const list = board.map(function(row){ 
			return row.id + row.name ;
		});
		
		return (
			<div>
				{list}
			</div>
		);
	}
}

export default App1;
