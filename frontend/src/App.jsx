import './App.css';
import { Header, HomePage, Reservations, Login } from '../index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Login/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='reservations' element={<Reservations />} />
          <Route path='signup' element={<Signup/>}/>
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;