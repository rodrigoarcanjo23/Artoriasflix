import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes  } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import NotFound from './pages/NotFound';
import CadastroCategoria from './pages/cadastro/Categoria';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} exact  />
    <Route path='/cadastro/video' element={<CadastroVideo />} exact  />
    <Route path='/cadastro/categoria' element={<CadastroCategoria />} exact  />
    <Route path='/404' element={<NotFound />}   />

    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


