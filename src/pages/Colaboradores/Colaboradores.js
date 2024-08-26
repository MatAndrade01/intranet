import React from 'react';
import './styles.css'
import { Header } from '../../components/Header/Header';
import { CardColaborador } from '../../components/CardColaborador/CardColaborador';

function Colaboradores() {
    return (
        <div className="colaboradoresContainer">
            <Header/>
            <body className='bodyColaboradores'>
                <h2 className='titleColaboradores'>Novos Colaboradores</h2>
                <section className='sectionColaboradores'>
                    <CardColaborador src='https://avatars.githubusercontent.com/u/125470760?v=4' childrenName='Matheus' childrenDescrition='Assistente de TI JR'/>
                    <CardColaborador src='https://avatars.githubusercontent.com/u/102703578?v=4' childrenName='Marcio' childrenDescrition='Assistente de TI JR'/>
                    <CardColaborador src='https://avatars.githubusercontent.com/u/125470760?v=4' childrenName='Matheus' childrenDescrition='Assistente de TI JR'/>
                    <CardColaborador src='https://avatars.githubusercontent.com/u/102703578?v=4' childrenName='Matheus' childrenDescrition='Assistente de TI JR'/>
                </section>
            </body>
        </div>
    );
}

export default Colaboradores;