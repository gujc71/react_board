import React, { Component } from 'react';

class BoardRow extends Component {
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

export default BoardRow;

