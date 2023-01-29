import './App.css';
import { useState } from 'react';
import logo from './image-logo-grey.jpg'
import Home from './Home';
import About from './About';
import Delivery from './Delivery';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Router>
      <nav>
        <div className='container-logo' >
          <img src={logo} alt='logo' width='270px' height='230px'/>
        </div>
        <Link to='/' className='link'>Главная</Link>
        <Link to='./about' className='link'>Обо мне</Link>

        <Link to='./delivery' className='link'>Заказ и доставка</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
      </Routes>

      </Router>
    </div>
  )
}

export default App;
