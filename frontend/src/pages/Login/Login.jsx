import './Login.css';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <Container fluid className='login d-flex flex-column justify-content-center align-items-center'>
            <div className="login-title">
                <h3 className='my-2'>Login into LittleLemon</h3>
            </div>
            <div className="login-wrapper p-4 rounded-3">
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='email'>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Email' required>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' required>
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
                    <div className="login-btn text-center">
                        <button className='px-3 py-2 m-2 rounded-3 fw-bold outline-none'>
                            Login
                        </button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}

export default Login;

export const Signup = () => {
    return (
        <Container fluid className='login d-flex flex-column justify-content-center align-items-center'>
            <div className="login-title">
                <h3 className='my-2'>Welecom to LittleLemon !</h3>
            </div>
            <div className="login-wrapper p-4 rounded-3">
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='name'>Full name</Form.Label>
                        <Form.Control type='text' placeholder='Full Name' required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='email'>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Email' required>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password' required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="my-3" id="formCheckbox">
                        <Form.Check type="checkbox" label="remember me" />
                    </Form.Group>
                    <div className="dont-have-acount">
                        <Link to={'/login'}>
                            already have an account? Login
                        </Link>
                    </div>
                    <div className="login-btn text-center">
                        <button className='px-3 py-2 m-2 rounded-3 fw-bold outline-none'>
                            SignUp !
                        </button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}