import './Header.css';
import logo from '../../assets/logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { IoIosLogOut, IoIosSad } from "react-icons/io";
import UseAuth from '../hooks/UseAuth';

const Header = () => {
  const isAuthenticated = UseAuth();
  return (
    <Navbar expand="lg" className="nav-wrapper py-1">
      <Container>
        <Navbar.Brand href="/" className='mx-5 logo-wrapper'>
          <img src={logo} alt="Little Lemon" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bar' />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="links py-4">
            <Nav.Link className='link rounded p-2 mx-2' href="/">Home</Nav.Link>
            <Nav.Link className='link rounded p-2 mx-2' href="/#menu">Menu</Nav.Link>
            <Nav.Link className='link rounded p-2 mx-2' href="/#about">About</Nav.Link>
            <Nav.Link className='link rounded p-2 mx-2' href="/reservations">Reservations</Nav.Link>
            {isAuthenticated ? (
              <Nav.Link className='link rounded p-2 mx-2' href="/logout"><IoIosLogOut /></Nav.Link>
            ) : (
              <Nav.Link className='link rounded p-2 mx-2' href="/login">Login</Nav.Link>
            )
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;