import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Approach from './pages/Approach';
import Identity from './pages/Identity';
import Midlife from './pages/Midlife';
import Sexuality from './pages/Sexuality';
import Therapy from './pages/Therapy';
import Form from './Form';
import '../../style/style.scss';

export default function App() {
  const [burgerClicked, setBurger] = useState(0);

  function burgerControl() {
    if (burgerClicked == 0 || burgerClicked == -1) {
      setBurger(1);
    }
    if (burgerClicked == 1) {
      setBurger(-1);
    }
  }

  return (
    <div className={burgerClicked == 1 ? 'scroll-block' : null}>
      <header>
        <div className='burger-wrap' onClick={() => burgerControl()}>
          <span className={'burger upper-line ' + (burgerClicked == 1 ? 'upper-line-active' : null)}/>
          <span className={'burger mid-line ' + (burgerClicked == 1 ? 'mid-line-active' : null)}/>
          <span className={'burger down-line ' + (burgerClicked == 1 ? 'down-line-active' : null)}/>
        </div>
        <nav className={burgerClicked == 1 ? 'menu-wrap-open' : burgerClicked == -1 ? 'menu-wrap-closed' : null}>
          <ul className={burgerClicked == 1 ? 'menu-open' : burgerClicked == -1 ? 'menu-closed' : null}>
            <Link to='/' onClick={() => setBurger(0)}>
              <li>Главная</li>
            </Link>
            <Link to='/about' onClick={() => setBurger(0)}>
              <li>Обо мне</li>
            </Link>
            <Link to='/approach' onClick={() => setBurger(0)}>
              <li>Мой подход</li>
            </Link>
            <Link to='/register' onClick={() => setBurger(0)}>
              <li>Запись</li>
            </Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/approach' element={<Approach/>}/>
        <Route path='/identity' element={<Identity/>}/>
        <Route path='/midlife' element={<Midlife/>}/>
        <Route path='/sexuality' element={<Sexuality/>}/>
        <Route path='/therapy' element={<Therapy/>}/>
      </Routes>
      <footer>
        <div id='address'>
          <p>
            г. Москва,<br/>
            Нащокинский переулок, д. 10
            <br/>
            <br/>
            Пн - Пт: 9:00 - 18:00
          </p>
        </div>
        <Form/>
        <div id='made-by'>
          <span>2022 by Aq-Idel</span>
        </div>
      </footer>
    </div>
  )
};