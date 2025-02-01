import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Reservations.css';
const Reservations = () => {
    return (
        <Container className='reservations d-flex flex-column justify-content-center align-items-center py-3'>
            <div className="steps d-flex justify-content-around align-items-center">
                <div className="step d-flex justify-content-center align-items-center text-light fw-bold mx-5">1</div>
                <div className="step d-flex justify-content-center align-items-center text-light fw-bold mx-5">2</div>
                <div className="step d-flex justify-content-center align-items-center text-light fw-bold mx-5">3</div>
            </div>
            <div className="form-wrapper rounded-3">
                <ReservationForm />
            </div>
        </Container>
    )
}

export default Reservations;

const ReservationForm = () => {
    return (
        <Container className='reservation-form my-2 p-3 rounded-3'>
            <h4 className='my-3 fw-bold'>Reservation:</h4>
            <Form>
                <Form.Group className="mb-2" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder="Full Name"  required/>
                </Form.Group>
                <Row>
                    <Form.Group as={Col} className="mb-2" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder="Email"  required/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-2" controlId="formGridMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type='text' placeholder="Mobile Number"  required/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type='date' placeholder="Date"  required/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Select defaultValue="Date" required>
                            <option value="" disabled>Timeslots</option>
                            <option value="5:00 PM" >5:00 PM</option>
                            <option value="6:00 PM" >6:00 PM</option>
                            <option value="6:30 PM" >6:30 PM</option>
                            <option value="7:00 PM" >7:00 PM</option>
                            <option value="8:00 PM" >8:00 PM</option>
                            <option value="9:00 PM" >9:00 PM</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mb-3' as={Col} controlId="formGridGuests">
                        <Form.Label>No. of guests</Form.Label>
                        <Form.Select defaultValue="1" required>
                            <option value="1" defaultChecked>1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                            <option value="6" >6</option>
                            <option value="7" >7</option>
                        </Form.Select>
                    </Form.Group>
                    <div className='d-flex justify-content-end'>
                        <Button type="reset" className='m-1'>
                            Reset
                        </Button>
                        <Button type="submit" className='m-1'>
                            Submit
                        </Button>
                    </div>
                </Row>
            </Form>
        </Container>
    )
}