import React from 'react';
import './styles.css'
import { Header } from '../../components/Header/Header';
import { CardColaborador } from '../../components/CardColaborador/CardColaborador';

function Colaboradores() {
    return (
        <div className="colaboradores-container">
            <Header/>
            <body className='bodyColaboradores'>
                <h2 className='titleColaboradores'>Novos Colaboradores</h2>
                <section className='sectionColaboradores'>
                    <CardColaborador/>
                    <CardColaborador/>
                    <CardColaborador/>
                    <CardColaborador/>
                </section>
            </body>
        </div>
    );
}

export default Colaboradores;