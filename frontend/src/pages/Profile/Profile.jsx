import { useEffect, useState } from 'react';
import './Profile.css';
import { Container, Row, Col } from 'react-bootstrap'
import { FaBookmark, FaRegUser } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";
import {Link} from 'react-router-dom';
import axios from 'axios';
const Profile = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [bookings, setBookings] = useState([])
    const [message, setMessage] = useState('');

    const fetchUserData = async () => {
        const access = localStorage.getItem('access_token')
        const refresh = localStorage.getItem('refresh_token');
        try {
            const response = await axios.get('https://devamar.pythonanywhere.com/api/auth/users/', {
                headers: {
                    Authorization: `Bearer ${access}`
                }
            })
            console.log('successfully fetch user data ✅', response.data)
            setUserName(response.data[0].username)
            setUserEmail(response.data[0].email)

        } catch (err) {
            console.error(err.response?.data)
            console.log(err.response?.data?.message || 'faild to fetch user data ❌')
            setMessage('faild to fetch user data ❌')

        }
    }
    const fetchUserBooking = async () => {
        try {
            const accessToken = localStorage.getItem('access_token')
            const response = await axios.get('https://devamar.pythonanywhere.com/api/booking/', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setBookings(response.data)
            console.log("successfully fetch user bookings ✅", response.data)
        } catch (err) {
            console.error(err.response?.data)
            setMessage(err.response?.data?.message)
        }
    }
    const removeBooking = async (bookingId) => {

        try {
            const accessToken = localStorage.getItem('access_token');
            const response = await axios.delete(`https://devamar.pythonanywhere.com/booking/${bookingId}/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setBookings(prevBookings => prevBookings.filter(booking => booking.id != bookingId));
            console.log('successfully deleted a booking ✅')
            setMessage('successfully deleted a booking ✅')

        } catch (err) {
            console.error(err.response?.data)
            setMessage(err.response?.data?.detail || 'faild to deleted a booking ❌')
        }
    }
    useEffect(() => {
        fetchUserData();
        fetchUserBooking();
    }, [])
    return (

        <Container className='profile d-flex justify-content-around align-items-center p-3'>
            <Row className='w-100'>
                <Col xl={6} lg={6} md={6} sm={6}>
                    <div className="user-info d-flex flex-column justify-content-center align-items-center">
                        <div className="user-title w-100 px-4 py-3 rounded-3">
                            <span><FaRegUser className='fs-3' /></span>
                            <span className='fw-bold mx-2'>User</span>
                        </div>
                        <div className="info-details p-4 rounded my-2">
                            <h5 className='fw-bold'>Name:</h5>
                            <p>{userName}</p>
                            <h5 className='fw-bold'>Email:</h5>
                            <p>{userEmail}</p>
                            <a href="/logout" className='py-2 px-4 bg-danger rounded-3 text-light'>Logout</a>
                        </div>
                    </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6}>
                    <div className="user-bookings d-flex flex-column justify-content-center align-items-center">
                        <div className="user-title w-100 px-4 py-3 rounded-3">
                            <span><MdTableBar className='fs-3' /></span>
                            <span className='fw-bold mx-2'>Your bookings</span>
                        </div>
                        <div className="booking-details p-4 rounded my-2">

                            {
                                bookings.length !== 0 ? (
                                    bookings.map((booking) => (
                                        <div key={booking.id}>
                                            <li>Name: {booking.name}</li>
                                            <li>Date: {booking.date} at {booking.time}</li>
                                            <button className='btn btn-danger' onClick={() => removeBooking(booking.id)}>delete</button>
                                            <p>{message}</p>
                                        </div>

                                    ))
                                ) : (
                                    <>
                                        <p>no bookings added</p>                                  
                                    <Link to={'reservations'} className='text-dark bg-warning py-1 px-3 rounded-3 fw-bold'>go reserve a table !</Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;
