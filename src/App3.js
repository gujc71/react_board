import React, { Component } from 'react';

/*
	formed list with Table tag and component
*/
class App3 extends Component {
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
							(<BoardItem key={row.id} row={row} />)
						)
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


export default App3;
