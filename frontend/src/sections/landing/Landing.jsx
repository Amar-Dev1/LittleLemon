import './Landing.css';
import MainTitle from '../../components/MainTitle';
import { Col, Container, Row } from 'react-bootstrap';
import landingImg from '../../assets/landing-img.png';
const Landing = () => {

let landingTitle = {
    color:'#f4ce14',
}
    return (
        <Container fluid className='landing py-4'>
            <Row className='d-flex justify-content-around align-items-center'>
                <Col lg={6} md={12} sm={12}>
                    <div className="landing-text text-center d-flex justify-content-between flex-column w-100">
                        <MainTitle styles={landingTitle} title="Little Lemon" color="#f4ce14" />
                        <h5 className='place d-block text-light'>Chicago</h5>
                        <p className='text-light fw-bold align-self-center'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <div className="book-btn my-3 mx-auto">
                            <a href="/reservations" className='book p-2 text-dark fw-bold rounded'>Reserve a Table</a>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div className="landing-img d-flex justify-content-center">
                        <img src={landingImg} alt="img" className='rounded-5' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Landing;