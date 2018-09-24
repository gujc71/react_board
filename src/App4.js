import React, { Component } from 'react';
/*
	add board (post)
*/
class App4 extends Component {
	constructor(props) {
		super(props);
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
		this.setState({
			board: this.state.board.concat({ id: this.state.maxNo++, date: new Date(), ...data })
		});
	}
  
	render() {
		const { board } = this.state;

		return (
			<div>
				<BoardForm onSaveData={this.handleSaveData}/>
				<table border="1">
					<tbody>
					<tr align="center">
						<td width="50">No.</td>
						<td width="300">Title</td>
						<td width="100">Name</td>
						<td width="100">Date</td>
					</tr>
					{
						board.map(function(row){ 
							return (<BoardItem key={row.id} row={row} />);
						})
					}
					</tbody>
				</table>
			</div>
		);
	}
}

class BoardItem extends React.Component {
    render() {
        return(
            <tr>
				<td>{this.props.row.id}</td>
				<td>{this.props.row.title}</td>
				<td>{this.props.row.name}</td>
				<td>{this.props.row.date.toLocaleDateString('ko-KR')}</td>
			</tr>
        );
    }
}

class BoardForm extends Component {
	state = {}
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSaveData(this.state);
		this.setState({});
    }
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input placeholder="title" name="title" onChange={this.handleChange}/>
				<input placeholder="name" name="name" onChange={this.handleChange}/>
				<button type="submit">Save</button>
			</form>
		);
	}
}

export default App4;

