import './MenuPag.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import fundo from '../assets/imgs/fundo.jpeg'

export default function Menu() {

const navigate = useNavigate();

    return (
    <div className='container'
    style={{backgroundImage:`url(${fundo})`,backgroundSize:"cover", backgroundPosition:"center" }}>
        <div>
            <h1>GameForge</h1>
<p>A GameForge é uma plataforma dedicada a reunir uma seleção diversificada de 
jogos com qualidade, acessibilidade e desempenho. Nosso objetivo é oferecer 
uma experiência confiável e 
organizada, permitindo que cada usuário explore conteúdos interativos de
forma prática, segura e intuitiva.
Trabalhamos continuamente para ampliar nosso catálogo, aprimorar funcionalidades 
e garantir um ambiente estável, pensado tanto para jogadores casuais quanto para 
entusiastas que buscam novas experiências.</p>
            <div>
                <button onClick={() => navigate('/jogos')}>Jogar</button>
                <button onClick={() => navigate('/opçoes')}>Opções</button>
                <button onClick={() => navigate('/creditos')}>Creditos</button>
            </div>
        </div>
        
    </div>
    )
}