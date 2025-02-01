import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import footerLogo from '../../assets/footer-logo.svg';
const Footer = () => {
    return (
        <Container fluid className='footer py-5'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xl={3} lg={4} md={6} sm={12} className=''>
                        <div className="footer-logo">
                            <img src={footerLogo} alt="" />
                        </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12} className=''>
                        <h4 className='info-title'>Reach out to us</h4>
                        <h5 className='reachus-title'>Address:</h5>
                        <ul className="address-info">
                            <li>Little Lemon Restaurant</li>
                            <li>123 Main Street</li>
                            <li>Anytown, USA 12345</li>
                        </ul>
                        <h5 className='reachus-title'>Email Address:</h5>
                        <ul className='email-info'>
                            <li>info@littlelemon.com</li>
                        </ul>
                        <h5 className='reachus-title'>Phone Number:</h5>
                        <ul className='number-info'>
                            <li>(555) 123-4567</li>
                        </ul>
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12} className=''>
                        <h4 className='info-title'>Get to know us</h4>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press Releases</a></li>
                            <li><a href="#">Exclusive Recipes</a></li>
                            <li><a href="#">Our Kitchen</a></li>
                        </ul>

                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12} className=''>
                        <h4 className='info-title'>Connect with us</h4>
                        <ul className='contact-info'>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;