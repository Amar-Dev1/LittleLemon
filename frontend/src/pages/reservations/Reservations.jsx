import './Reservations.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/footer-logo.svg';
import { FaCheckCircle } from "react-icons/fa";

const Reservations = () => {
    const [active, setActive] = useState(3)
    const [formDate, setFormDate] = useState({ name: '', email: '', mobile: '', date: '', time: '', guests: '1' })
    useEffect(() => {
        setActive(1)
    }, [])
    return (
        <Container className='reservations d-flex flex-column justify-content-center align-items-center py-3'>
            <div className="steps d-flex justify-content-around align-items-center">
                <div className={`step ${active == 1 ? 'active-form' : ''} d-flex justify-content-center align-items-center text-light fw-bold mx-5`}>1</div>
                <div className={`step ${active == 2 ? 'active-form' : ''} d-flex justify-content-center align-items-center text-light fw-bold mx-5`}>2</div>
                <div className={`step ${active == 3 ? 'active-form' : ''} d-flex justify-content-center align-items-center text-light fw-bold mx-5`}>3</div>
            </div>
            <div className="form-wrapper rounded-3">
                {active === 1 && <ReservationForm setActive={setActive} formDate={formDate} setFormDate={setFormDate} />}
                {active === 2 && <ReviewForm setActive={setActive} formData={formDate} />}
                {active === 3 && <ReserveComplete setActive={setActive} formData={formDate} />}
            </div>
        </Container>
    )
}

export default Reservations;

export const ReservationForm = ({ setActive, formDate, setFormDate }) => {
    useEffect(() => {
        setActive(1);
    }, [setActive]);

    const handleChange = (e) => {
        setFormDate({
            ...formDate,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setActive(2);
    };

    return (
        <Container className='reservation-form my-2 p-3 rounded-3'>
            <h4 className='my-3 fw-bold'>Reservation:</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' onChange={handleChange} value={formDate.name} type='text' placeholder="Full Name" required />
                </Form.Group>
                <Row>
                    <Form.Group as={Col} className="mb-2" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' onChange={handleChange} value={formDate.email} type='email' placeholder="Email" required />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-2" controlId="formGridMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control name='mobile' onChange={handleChange} value={formDate.mobile} type='text' placeholder="Mobile Number" required />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control name="date" onChange={handleChange} value={formDate.date} type='date' required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Select name="time" value={formDate.time} required onChange={handleChange}>
                            <option value="" disabled>Select Time</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="6:30 PM">6:30 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mb-3' as={Col} controlId="formGridGuests">
                        <Form.Label>No. of guests</Form.Label>
                        <Form.Select name="guests" value={formDate.guests} required onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <div className='d-flex justify-content-end'>
                    <button type="reset" className='rest-btn m-1 p-2 rounded-3'>
                        Reset
                    </button>
                    <button type="submit" className='m-1 p-2 rounded-3 text-light'>
                        Continue
                    </button>
                </div>
            </Form>
        </Container>
    );
};

export const ReviewForm = ({ setActive, formData }) => {
    useEffect(() => {
        setActive(2);
    }, [setActive]);

    const backStep = () => {
        setActive(1)
    }
    const nextStep = () => {
        setActive(3)
    }
    return (
        <Container className='review-form my-2 p-3 rounded-3'>
            <h4 className='my-3 fw-bold'>Review you reserve:</h4>
            <Row className='review-row d-flex m-1 p-3 rounded-3 justify-content-center align-items-around'>
                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
                    <div className="review-img ">
                        <img src={logoImg} alt="" />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center text-light'>
                    <div className="review-info d-flex flex-column">
                        <div className="name">
                            <h4>Reservation for:</h4>
                            <p>{formData.name}</p>
                        </div>
                        <div className="guests">
                            <h4>No. of Guests:</h4>
                            <p>{formData.guests}</p>
                        </div>
                        <div className="date">
                            <h4>Date:</h4>
                            <p>{formData.date} at {formData.time}</p>
                        </div>
                        <div className="mobile">
                            <h4>Mobile:</h4>
                            <p>{formData.mobile}</p>
                        </div>
                        <div className="email">
                            <h4>Email:</h4>
                            <p>{formData.email}</p>
                        </div>
                        <div className="submit-review d-flex justify-content-end">
                            <Button className='m-1 bg-light text-dark' onClick={() => backStep()}>
                                Back
                            </Button>
                            <Button className='m-1 bg-light text-dark' onClick={() => nextStep()}>
                                Submit
                            </Button>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export const ReserveComplete = ({ setActive, formData }) => {
    useEffect(() => {
        setActive(3)
    }, [setActive])
    return (
        <Container className='reserve-complete d-flex flex-column justify-content-center align-items-center text-center p-2'>
            <div className="ok-icon my-4">
                <FaCheckCircle className='fs-1 fw-bold text-success' />
            </div>
            <div className="ok-text m-3">
                <h5>Congratulations on your successful table reservation!</h5>
                <p> your table is reserved for <span className='fw-bold'>{formData.date} at {formData.time}</span></p>
                <p>Get ready to indulge in a delightful dining experience! We have sent the reservation details to your email and mobile number. Enjoy your meal!</p>
            </div>
            <div className="ok-btn my-3">
                <Link className='p-2 rounded-3 text-light fw-bold' to={'/'}>
                    Home
                </Link>
            </div>
        </Container>
    )
}