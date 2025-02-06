import './Logout.css';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

const Logout = () => {

    const [error, setError] = useState(null)
    const submitLogout = async () => {
        try {
            setError(null)
            const access_token = localStorage.getItem('access_token')
            const refreshToken = localStorage.getItem('refresh_token');
            if (!refreshToken) {
                console.log('no refresh token found')
                return;
            }
            await axios.post("http://127.0.0.1:8000/api/auth/token/blacklist/", {
                refresh: refreshToken
            });
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            console.log("Logged out successfully ✅");
            window.location.href = '/';

        }
        catch (err) {
            console.error('Logged out faild ❌', err.response?.data);
            setError('Logged out faild ❌. Try again')
        }
    }

    return (
        <Container style={{ height: '85vh' }} className='d-flex flex-column justify-content-center align-items-center'>
            <div style={{ width: '80%', height: '80%', backgroundColor: 'aliceblue' }} className="auth-message d-flex flex-column justify-content-center align-items-center text-center p-3 rounded-4">
                <h2 className='my-3'>Are you sure to logout ?</h2>
                <Button className='btn btn-warning rounded-3' onClick={submitLogout}>Logout</Button>
            </div>
            <p>{error}</p>
        </Container>
    )
}

export default Logout
