import React, { Component } from 'react';
import BoardForm from './App6_BoardForm';
import BoardItem from './App6_BoardItem';

/*
	component files.
*/
class App6 extends Component {
	constructor(props) {
		super(props);
		this.child = React.createRef();
	}
	
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
	
    handleSaveData = (data) => {
		if (data.id ===null || data.id==='' || data.id===undefined) {	// new : Insert
			this.setState({
				board: this.state.board.concat({id: this.state.maxNo++, date: new Date(), ...data })
			});
		} else {														// Update
			this.setState({
				board: this.state.board.map(row => data.id === row.id ? {...data }: row)
			})			
		}
	}
	
	handleRemove = (id) => {
		this.setState({
			board: this.state.board.filter(row => row.id !== id)
		})
	}
	
	handleUpdateForm = (row) => {
		 this.child.current.handleUpdateForm(row);
	}
	
	render() {
		const { board } = this.state;

		return (
			<div>
				<BoardForm onSaveData={this.handleSaveData}  ref={this.child}/>
				<table border="1">
					<tbody>
					<tr align="center">
						<td width="50">No.</td>
						<td width="300">Title</td>
						<td width="100">Name</td>
						<td width="100">Date</td>
					</tr>
					{
						board.map(row =>
							(<BoardItem key={row.id} row={row} onRemove={this.handleRemove} onUpdateForm={this.handleUpdateForm} />)
						)
					}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App6;

