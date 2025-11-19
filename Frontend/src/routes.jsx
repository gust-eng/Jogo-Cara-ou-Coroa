import { BrowserRouter, Routes, Route } from 'react-router';

import Menu from './pages/MenuPag.jsx';
import Jogos from './pages/Jogos/jogos.jsx';
import Opcoes from './pages/opcoes.jsx';
import Creditos from './pages/creditos.jsx';

export default function Navegacao(){
return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Menu/>} />
        <Route path='/jogos' element={<Jogos/>} />
        <Route path='/opcoes' element={<Opcoes/>} />
        <Route path='/creditos' element={<Creditos/>} />
    </Routes>
    </BrowserRouter>
)}

