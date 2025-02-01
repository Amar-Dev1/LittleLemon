import './Reviews.css';
import { Col, Container, Row } from 'react-bootstrap';
import MainTitle from '../../components/MainTitle';
import Review from '.././../components/Review';
const Reviews = () => {

    let reviewsTitle = {
        color: '#f4ce14',
        textAlign: 'center',
        margin: '20px 0',
    }

    return (
        <Container fluid className='reviews py-4'>
            <Container>
                <MainTitle styles={reviewsTitle} title="Valuable Customer Reviews" />
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center my-1'>
                        <Review person={"Ahmed"} reviewsCount={13} reviewFeedback={"Decadent, delicious dessert - the perfect ending to a fantastic meal."} />
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center my-1'>
                        <Review person={"Ali"} reviewsCount={10} reviewFeedback={"Decadent, delicious dessert - the perfect ending to a fantastic meal."} />
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center my-1'>
                        <Review person={"Mohamed"} reviewsCount={15} reviewFeedback={"Decadent, delicious dessert - the perfect ending to a fantastic meal."} />
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center my-1'>
                        <Review person={"Omar"} reviewsCount={17} reviewFeedback={"balbalbalbalbalblabalbalbalbablbalab Decadent, delicious dessert - the perfect ending to a fantastic meal."} />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Reviews
