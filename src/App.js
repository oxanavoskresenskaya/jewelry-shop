import './App.css';
import logo from './image-logo-grey.jpg'
import Home from './Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import email from './letter-logo.png';
import telegram from './telegram-logo.png';
import {
  EmailShareButton,
  TelegramShareButton
} from "react-share";
function App() {
  
  return (
    <div>
      <Router>
      <nav>
        <div className='container-logo' >
          <img src={logo} alt='logo' className='logo' />
        </div>
        <Link to='/' className='link'>Главная</Link>
        <HashLink to='#hash-about' className='link'>Обо мне</HashLink>
        <HashLink to='#hash-fragment' className='link'>Изделия</HashLink>
        <HashLink to='.#hash-delivery' className='link'>Заказ и доставка</HashLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </Router>
      <div className='footer'>
          <h3 className='footer-header'>Website designed by Oksana Voskresenskaya</h3>
          <div className='footer-logo' >
          <EmailShareButton url='dariaudina@icloud.com'><img src={email} alt='logo-email' width='60px' className='logo-footer' /></EmailShareButton>
           <TelegramShareButton url='https://t.me/oxanavoskresenskaya'><img src={telegram} alt='logo-telegram' width='60px' className='logo-footer'/></TelegramShareButton>
          </div>
      </div>
    </div>
  )
}

export default App;
