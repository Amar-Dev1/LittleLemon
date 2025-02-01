import './App.css';
import { Header, HomePage, Reservations } from '../index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='reservations' element={<Reservations/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;