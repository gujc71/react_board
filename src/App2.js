import React, { Component } from 'react';
/*
 simple list
 */
class App2 extends Component {
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

		return (
			<div>
			{
				board.map(function(row){ 
					return row.id + row.name ;
				}) 
			}
			</div>
		);
	}
}

export default App2;
