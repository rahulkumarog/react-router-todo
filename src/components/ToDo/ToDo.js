import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ToDo.scss';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import data from './data';
import { useNavigate } from 'react-router-dom';

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
const ToDo = props => {
	const history = useNavigate();
	const DeleteToDo = (i) => {
		
		const index = data.map(v => v.index).indexOf(i);
	
		data.splice(index, 1)
	
		history('/todo')
	}
	return (
    <Container className="p-3">
		<Container className="p-5 mb-4 bg-light rounded-3">
			<h1 className="header">To Do List</h1>
			
			<Table striped bordered hover>
				<thead>
					<tr>
					<th>#</th>
					<th>To Do</th>
					<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map(row => {
							return <tr key={row.index}>
								<td>{row.index}</td>
								<td>{row.value}</td>
								<td><Button onClick={() => DeleteToDo(row.index)}>Delete</Button></td>
							</tr>
						})
					}
					
				</tbody>
			</Table>
		</Container>
	</Container>
)
}

export default ToDo;
