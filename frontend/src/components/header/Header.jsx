import './Header.css';
import logo from '../../assets/logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
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
            <Nav.Link className='link rounded p-2 mx-2' href="reservations">Reservations</Nav.Link>
            <Nav.Link className='link rounded p-2 mx-2' href="login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;