import { useRef, useState } from 'react';
import './Login.css';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RiErrorWarningLine } from "react-icons/ri";
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setMessage(null)
        // login the user
        try {
            const response = await axios.post("https://devamar.pythonanywhere.com/api/auth/token/", {
                username,
                password,
            });
            const { access, refresh } = response.data
            console.log("logged in successfully ✅", response.data)

            if (access) {
                localStorage.setItem('access_token', access)
                console.log("access token saved successfully ✅");
            }
            if (refresh) {
                localStorage.setItem('refresh_token', refresh)
                console.log("Refresh token saved successfully ✅");
            }
            window.location.href = '/'

        } catch (err) {
            console.error("login faild ❌", err.response?.data)
            if (err.response) {
                setError(err.response.data?.detail || 'login faild ❌')
            } else {
                setError("Something went wrong. Please try again.");
            }
            setMessage("Something went wrong! .Please try again.")
        }
    }

    return (
        <Container fluid className='login d-flex flex-column justify-content-center align-items-center'>
            <div className="login-title">
                <h3 className='my-2'>Login into LittleLemon</h3>
            </div>
            <div className="login-wrapper p-4 rounded-3">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control type='text' placeholder='username' required onChange={(e) => setUsername(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="my-3" id="formCheckbox">
                        <Form.Check type="checkbox" label="remember me" />
                    </Form.Group>
                    <div className="dont-have-acount">
                        <Link to={'/signup'}>
                            dont have an account? Signup
                        </Link>
                    </div>
                    <div className="login-btn text-center d-flex flex-column">
                        <button className='px-3 py-2 m-2 rounded-3 fw-bold outline-none'>
                            Login
                        </button>
                        <span className='text-danger my-2'>{message}</span>
                    </div>
                </Form>
            </div>
        </Container>
    )
}

export default Login;

export const Signup = () => {

    const navigate = useNavigate()

    // validation
    const [emailInput, setEmailInput] = useState('');
    const [passInput, setPassInput] = useState('');

    const [emailTouched, setEmailTouched] = useState(false);
    const [passTouched, setPassTouched] = useState(false);

    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPass, setIsValidPass] = useState(false);

    const emailRef = useRef(null)
    const passRef = useRef(null)

    // input data states
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);



    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setMessage(null)
        // validate email
        const emailValue = emailRef.current.value;
        setEmailInput(emailValue)
        setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue));
        setEmailTouched(true)
        //  validate password
        const passValue = passRef.current.value;
        setPassInput(passValue)
        setIsValidPass(passValue.length >= 8)
        setPassTouched(passValue)
        // make post request
        try {
            const response = await axios.post('https://devamar.pythonanywhere.com/api/auth/users/', {
                email,
                username,
                password,
            });
            // navigate to login after successful sign up ✅
            console.log("successfully signed up ✅", response.data)
            setMessage("successfully signed up ✅")
            navigate('/lgoin')
        } catch (err) {
            const errorData = err.response?.data;
            if (errorData) {
                if (errorData.username) {
                    setMessage(errorData.username[0])
                }
                else if (typeof errorData === 'string') {
                    setMessage(errorData)
                }
            }
        }
    }
    return (
        <Container fluid className='login d-flex flex-column justify-content-center align-items-center'>
            <div className="login-title">
                <h3 className='my-2'>Welecom to LittleLemon !</h3>
            </div>
            <div className="login-wrapper p-4 rounded-3">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='name'>Username</Form.Label>
                        <Form.Control type='text' placeholder='Username' required onChange={(e => setUsername(e.target.value))}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='email'>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Email' required ref={emailRef} onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                        {emailTouched && !isValidEmail && <small className='text-danger'><RiErrorWarningLine /> enter a valid email</small>}
                        {emailTouched && isValidEmail && <small className='text-success'><FaCheckCircle /> valid email</small>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' required ref={passRef} onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                        {passTouched && !isValidPass && <small className='text-danger'><RiErrorWarningLine /> at least 8 characters</small>}
                        {passTouched && isValidPass && <small className='text-success'><FaCheckCircle /> valid password</small>}
                    </Form.Group>
                    <Form.Group className="my-3" id="formCheckbox">
                        <Form.Check type="checkbox" label="remember me" />
                    </Form.Group>
                    <div className="dont-have-acount">
                        <Link to={'/login'}>
                            already have an account? Login
                        </Link>
                    </div>
                    <div className="login-btn text-center d-flex flex-column">
                        <button className='px-3 py-2 m-2 rounded-3 fw-bold outline-none'>
                            SignUp !
                        </button>
                        <span className='text-dark my-2'>{message}</span>
                    </div>
                </Form>

            </div>
        </Container>
    )
}