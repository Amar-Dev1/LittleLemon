import MainTitle from '../../components/MainTitle';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../assets/about-img1.png';
const About = () => {
    return (
        <Container id='about' className='py-5'>
            <Row className='d-flex justify-content-around my-4'>
                <Col lg={6} md={6} sm={12}>
                    <div className="about-text">
                        <MainTitle title="Little Lemon" />
                        <h5 style={{fontFamily:'serif',fontWeight:"bold"}}>Chicago</h5>
                        <p className='text-muted fw-bold fs-4 my-5'>Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
                </Col>

            </Row>
        </Container>
    )
}

export default About
