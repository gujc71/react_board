import React, { Component } from 'react';


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

export default BoardForm;

