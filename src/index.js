import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Home from './pages/Home/Home';
import Aniversario from './pages/Aniversario/Aniversario';
import Colaboradores from './pages/Colaboradores/Colaboradores';
import ComunicadoInterno from './pages/ComunicadoInterno/ComunicadoInterno';
import FeriadosMensais from './pages/FeriadosMensais/FeriadosMensais';
import RamaisMatriz from './pages/RamaisMatriz/RamaisMatriz';
import RamaisFiliais from './pages/RamaisFiliais/RamaisFiliais'; // Corrigido o nome do import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/colaboradores" element={<Colaboradores />} />
        <Route path="/aniversario" element={<Aniversario />} />
        <Route path="/comunicadointerno" element={<ComunicadoInterno />} />
        <Route path="/feriadosmensais" element={<FeriadosMensais />} />
        <Route path="/ramaismatriz" element={<RamaisMatriz />} />
        <Route path="/ramaisfiliais" element={<RamaisFiliais />} />
        {/* Adicione outras rotas aqui conforme necessário */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
