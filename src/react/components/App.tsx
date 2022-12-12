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
import '../../style/mobile.scss';

export default function App() {
  const [burgerClicked, setBurger] = useState(false);

  return (
    <div className={burgerClicked ? 'scroll-block' : null}>
      <header>
        <div className='burger-wrap' onClick={() => setBurger(!burgerClicked)}>
          <span className={'burger upper-line ' + (burgerClicked ? 'upper-line-active' : null)}/>
          <span className={'burger mid-line ' + (burgerClicked ? 'mid-line-active' : null)}/>
          <span className={'burger down-line ' + (burgerClicked ? 'down-line-active' : null)}/>
        </div>
        <nav className={burgerClicked ? 'menu-wrap-open' : null}>
          <ul className={burgerClicked ? 'menu-open' : null}>
            <Link to='/' onClick={() => setBurger(false)}>
              <li>Главная</li>
            </Link>
            <Link to='/about' onClick={() => setBurger(false)}>
              <li>Обо мне</li>
            </Link>
            <Link to='/approach' onClick={() => setBurger(false)}>
              <li>Мой подход</li>
            </Link>
            <Link to='/register' onClick={() => setBurger(false)}>
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
        <Form/>
        <div id='made-by'>
          <span>2022 by Aq-Idel</span>
        </div>
      </footer>
    </div>
  )
};