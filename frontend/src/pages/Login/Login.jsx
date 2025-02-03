import { useRef, useState } from 'react';
import './Login.css';
import { AccordionBody, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RiErrorWarningLine } from "react-icons/ri";
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        // login the user
        try {
            const response = await axios.post("", {
                email,
                password,
            });
            console.log("logged in successfully ✅", response.data)
            // store the token in local storage
            localStorage.setItem('token', response.data.toekn);
            // navigate to the home page 
            navigate('/')

        } catch (err) {
            console.error("login faild ❌", err.response?.data)
            setError(err.response?.message || 'login faild ❌')
            setMessage("Something went wrong! .Please try again.")
        }
        // navigate to the home page
    }

    return (
        <Container fluid className='login d-flex flex-column justify-content-center align-items-center'>
            <div className="login-title">
                <h3 className='my-2'>Login into LittleLemon</h3>
            </div>
            <div className="login-wrapper p-4 rounded-3">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='email'>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)}>
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
    // validation
    const [emailInput, setEmailInput] = useState('');
    const [passInput, setPassInput] = useState('');

    const [emailTouched, setEmailTouched] = useState(false);
    const [passTouched, setPassTouched] = useState(false);

    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPass, setIsValidPass] = useState(false);

    const emailRef = useRef(null)
    const passRef = useRef(null)
    // navigation
    const navigate = useNavigate()

    // input data states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
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
            const response = await axios.post('', {
                name,
                email,
                password,
            });
            // navigate to login after successful sign up ✅
            navigate('/login')
        } catch (err) {
            console.error("signup faild ❌", err.response?.data)
            setError("err.response?.data?.message" || 'signup faild ❌')
            setMessage("Something went wrong! .Please try again.")
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
                        <Form.Label htmlFor='name'>Full name</Form.Label>
                        <Form.Control type='text' placeholder='Full Name' required onChange={(e => setName(e.target.value))}>
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
                        <span className='text-danger my-2'>{message}</span>
                    </div>
                </Form>

            </div>
        </Container>
    )
}