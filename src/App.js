import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link,NavLink, Outlet } from 'react-router-dom';

function App() {
	
  return (
    <div className="App">
        <header className="App-header">
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">React To Do</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
						<Nav.Item><NavLink className='nav-link' to="/create">Add New To Do</NavLink></Nav.Item>
						<Nav.Item><NavLink className='nav-link' to="/todo">To Do List</NavLink></Nav.Item>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			
        </header>
	  <Outlet/>
    </div>
  );
}

export default App;
