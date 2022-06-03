import React from "react";
import { Link, BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import ToDo from "./components/ToDo/ToDo";
import Create from "./components/ToDo/Create";

const Routess = props => (
	<div className="nav">
		<Router>
			<Routes>
					<Route path="/" element={<App/>}>
						<Route path='/todo' element={<ToDo/>}/>
						<Route path='/create' element={<Create/>}/>
					</Route>
			</Routes>
		</Router>
	</div>
)


export default Routess;