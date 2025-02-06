import './Reservations.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../components/hooks/UseAuth';
import logoImg from '../../assets/footer-logo.svg';
import { FaCheckCircle } from "react-icons/fa";
import axios from 'axios';

const Reservations = () => {
  const isAuthenticated = UseAuth();
  if (!isAuthenticated) {
    return (
      <Container style={{ height: '85vh' }} className='d-flex justify-content-center align-items-center'>
        <div style={{ width: '80%', height: '80%', backgroundColor: 'aliceblue' }} className="auth-message d-flex flex-column justify-content-center align-items-center text-center p-3 rounded-4">
          <h2 className='my-3'>You must to login first 😉</h2>
          <Link to={'/login'} className='btn btn-warning rounded-3'>Login</Link>
        </div>
      </Container>
    )
  }

  const [active, setActive] = useState(1)
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
              <option value="5:00">5:00</option>
              <option value="6:00">6:00</option>
              <option value="6:30">6:30</option>
              <option value="7:00">7:00</option>
              <option value="8:00">8:00</option>
              <option value="9:00">9:00</option>
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

// export const ReviewForm = ({ setActive, formData }) => {

//     const formatedTime = formData.time? `${formData.time}:00`:formData;

//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         setActive(2);
//     }, [setActive]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage(null);
//         // make post request 
//         try {
//             const accessToken = localStorage.getItem('access_token')
//             const response = await axios.post('http://127.0.0.1:8000/api/booking/', {
//                 name:formData.name,
//                 email: formData.email,
//                 mobile: formData.mobile,
//                 date: formData.date,
//                 time: formatedTime,
//                 guests: formData.guests,
//             },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${accessToken}`,
//                         "Content-Type": "application/json",
//                     }
//                 }
//             );
//             console.log(token)
//             if (response.status === 200) {
//                 setMessage('Reservation successful! ✅');
//                 console.log('reserve successful ✅')
//                 setActive(3)
//             } else {
//                 setMessage('Something went wrong. Please try again.');
//             }
//         } catch (err) {
//             console.error('Reserve failed ❌', err.response?.data || err);
//             setMessage('Something went wrong. Please try again.');
//         }

//     }

//     return (
//         <Container className='review-form my-2 p-3 rounded-3'>
//             <h4 className='my-3 fw-bold'>Review you reserve:</h4>
//             <Row className='review-row d-flex m-1 p-3 rounded-3 justify-content-center align-items-around'>
//                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
//                     <div className="review-img ">
//                         <img src={logoImg} alt="" />
//                     </div>
//                 </Col>
//                 <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center text-light'>
//                     <div className="review-info d-flex flex-column">
//                         <Form onSubmit={handleSubmit}>
//                             <div className="name">
//                                 <h4>Reservation for:</h4>
//                                 <p>{formData.name}</p>
//                             </div>
//                         </Form>
//                         <div className="guests">
//                             <h4>No. of Guests:</h4>
//                             <p>{formData.guests}</p>
//                         </div>
//                         <div className="date">
//                             <h4>Date:</h4>
//                             <p>{formData.date} at {formData.time}</p>
//                         </div>
//                         <div className="mobile">
//                             <h4>Mobile:</h4>
//                             <p>{formData.mobile}</p>
//                         </div>
//                         <div className="email">
//                             <h4>Email:</h4>
//                             <p>{formData.email}</p>
//                         </div>
//                         <div className="submit-review d-flex justify-content-end">
//                             <Button className='m-1 bg-light text-dark' onClick={() => setActive(1)}>
//                                 Back
//                             </Button>
//                             <Button className='m-1 bg-light text-dark' onClick={handleSubmit}>
//                                 Submit
//                             </Button>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//             <p className='text-danger fw-bold my-2'>{message}</p>

//         </Container>
//     )
// }

export const ReviewForm = ({ setActive, formData }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setActive(2);
  }, [setActive]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const formattedTime = formData.time.includes(":") ? formData.time : `${formData.time}:00`;
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setMessage('You need to be logged in to make a reservation.');
        return;
      }

      const response = await axios.post('http://127.0.0.1:8000/api/booking/', {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        date: formData.date,
        time: formattedTime,
        guests: formData.guests,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setMessage('Reservation successful! ✅');
        setActive(3);
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      const errorData = err.response.data;
      if (errorData) {
        if (errorData.mobile) {
          setMessage(errorData.mobile[0])
        } else if (errorData.time) {
          setMessage(errorData.time[0])
        }

        else if (typeof errorData === 'string') {
          setMessage(errorData)
        }
      }
    }
  };

  return (
    <Container className='review-form my-2 p-3 rounded-3'>
      <h4 className='my-3 fw-bold'>Review your reservation:</h4>
      <Row className='review-row d-flex m-1 p-3 rounded-3 justify-content-center align-items-around'>
        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center'>
          <div className="review-img">
            <img src={logoImg} alt="Restaurant Logo" />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center text-light'>
          <div className="review-info d-flex flex-column">
            <Form onSubmit={handleSubmit}>
              <div className="name">
                <h4>Reservation for:</h4>
                <p>{formData.name}</p>
              </div>
            </Form>
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
              <Button className='m-1 bg-light text-dark' onClick={() => setActive(1)}>
                Back
              </Button>
              <Button className='m-1 bg-light text-dark' onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <p className='text-dark fw-bold my-2'>{message}</p>
    </Container>
  );
};


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