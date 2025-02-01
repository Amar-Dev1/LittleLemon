import { Container, Row, Col } from 'react-bootstrap';
import './Menu.css';
import MenuItem from '../../components/MenuItem';
import MainTitle from '../../components/MainTitle';
const Menu = () => {

  let menuTitleStyles = {
    color: 'black',
    textAlign: 'center',
    marginBottom: '20px',
    marginTop: '20px',
  };

  return (
    <Container id='menu' className='py-4 d-flex justify-content-center flex-column'>
      <MainTitle styles={menuTitleStyles} title="This weeks specials ✨" color="#495e57" />
      <Row className='d-flex justify-content-center align-items-center p-2 my-3'>
        <Col xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center my-1'>
          <MenuItem />
        </Col>
        <Col xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center my-1'>
          <MenuItem />
        </Col>
        <Col xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center my-1'>
          <MenuItem />
        </Col>
        <Col xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center my-1'>
          <MenuItem />
        </Col>

      </Row>
    </Container>
  )
}

export default Menu
