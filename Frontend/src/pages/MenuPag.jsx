import './MenuPag.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Logo from '../assets/imgs/logo.png';

export default function Menu() {

    const navigate = useNavigate();
    const [bg, setBg] = useState(null);

    return (
        <div 
            className='container' 
            style={{ backgroundImage: bg ? `url(${bg})` : 'black' }}
        >
            <div className='titulo'>
                <img src={Logo} className='logo' />
                <h1>GameForge</h1>
            </div>

            <div className='botoes'>
                <button 
                    className="btjogo" 
                    onMouseEnter={() => setBg('/src/assets/imgs/jogar.gif')}
                    onMouseLeave={() => setBg(null)}
                    onClick={() => navigate('/jogos')}
                >
                    Jogar
                </button>

                <button 
                    className="btperfil" 
                    onMouseEnter={() => setBg('/src/assets/imgs/perfil.gif')}
                    onMouseLeave={() => setBg(null)}
                    onClick={() => navigate('/perfil')}
                >
                    Perfil
                </button>

                <button 
                    className="btopcoes" 
                    onMouseEnter={() => setBg('/src/assets/imgs/opcoes.gif')}
                    onMouseLeave={() => setBg(null)}
                    onClick={() => navigate('/opçoes')}
                >
                    Opções
                </button>

                <button 
                    className="btcreditos" 
                    onMouseEnter={() => setBg('/src/assets/imgs/creditos.gif')}
                    onMouseLeave={() => setBg(null)}
                    onClick={() => navigate('/creditos')}
                >
                    Créditos
                </button>
            </div>
        </div>
    );
}
