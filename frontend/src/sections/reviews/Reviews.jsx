import './Reviews.css';
import MainTitle from '../../components/MainTitle';
import { Container, Row } from 'react-bootstrap';
const Reviews = () => {

let reviewsTitle = {
    color:'#f4ce14',
    textAlign:'center',
    margin:'20px 0',
}

    return (
        <Container fluid className='reviews py-3'>
            <Container>
            <MainTitle styles={reviewsTitle} title="Valuable Customer Reviews"/>
            </Container>
        <Row>

        </Row>
        </Container>
    )
}

export default Reviews
