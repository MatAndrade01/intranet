import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './global.css';
import Home from './pages/Home/Home';
import Aniversario from './pages/Aniversario/Aniversario';
import Colaboradores from './pages/Colaboradores/Colaboradores';
import ComunicadoInterno from './pages/ComunicadoInterno/ComunicadoInterno';
import FeriadosMensais from './pages/FeriadosMensais/FeriadosMensais';
import RamaisMatriz from './pages/RamaisMatriz/RamaisMatriz';
import RamaisFilias from './pages/RamaisFiliais/RamaisFiliais';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colaboradores" element={<Colaboradores />} />
        <Route path='/Aniversario' element={<Aniversario />} />
        <Route path='/ComunicadoInterno' element={<ComunicadoInterno />} />
        <Route path='/FeriadosMensais' element={<FeriadosMensais />} />
        <Route path='/RamaisMatriz' element={<RamaisMatriz />} />
        <Route path='/RamaisFiliais' element={<RamaisFilias />} />
        {/* Adicione outras rotas aqui conforme necessário */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
