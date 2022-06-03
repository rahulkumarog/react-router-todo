import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom';
import data from './data';
import {v4 as uuid} from 'uuid';
import { logDOM } from '@testing-library/react';


// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
const Create = props => (
	
    <Container className="p-3">
		<Container className="p-5 mb-4 bg-light rounded-3">
		<h1 className="header">Add To Do Form</h1>
		
		<CreateForm></CreateForm>
		</Container>
	</Container>
)

const CreateForm = () => {
	const [todo, setCreate] = useState('');

	let history = useNavigate();

	const saveTodo = () => {
		
		const nextIndex = data.length > 0 ? data[data.length - 1].index + 1 : 1;
		data.push({
			index: nextIndex,
			value: todo
		})
		history('/todo')
    }

	return <Form>
		<Form.Group className="mb-3" controlId="todo">
			<Form.Label>To do </Form.Label>
			<Form.Control type="text" onChange={(e) => setCreate(e.target.value)} placeholder="Enter todo" />
		</Form.Group>
		<Button onClick={saveTodo} variant="primary">
		Submit
		</Button>
	</Form>
}

export default Create;
