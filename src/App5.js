import React, { Component } from 'react';

/*
	delete & update a Item(Row)
*/
class App5 extends Component {
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

class BoardItem extends React.Component {
	handleRemove = () => {
		const { row, onRemove } = this.props;
		onRemove(row.id);
	}	
	handleUpdateForm = () => {
		const { row, onUpdateForm } = this.props;
		onUpdateForm(row);
	}	
    render() {
		console.log(this.props.row.id);
        return(
            <tr>
				<td>{this.props.row.id}</td>
				<td><a onClick={this.handleUpdateForm}>{this.props.row.title}</a></td>
				<td>{this.props.row.name}</td>
				<td>{this.props.row.date.toLocaleDateString('ko-KR')}</td>
				<td><button onClick={this.handleRemove}>X</button></td>
			</tr>
        );
    }
}

class BoardForm extends Component {
	state = {
		name:'',
		title:''		
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	handleUpdateForm = (row) => {
		this.setState(row);
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSaveData(this.state);
		this.setState({
			id:'',
			name:'',
			title:''
		});
    }
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input placeholder="title" name="title" value={this.state.title} onChange={this.handleChange}/>
				<input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}/>
				<button type="submit">Save</button>
			</form>
		);
	}
}

export default App5;

