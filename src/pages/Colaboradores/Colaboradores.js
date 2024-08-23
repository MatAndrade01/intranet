import React from 'react';
import { Header } from '../../components/Header/Header';
import { CardColaborador } from '../../components/CardColaborador/CardColaborador';

function Colaboradores() {
    return (
        <div className="colaboradores-container">
            <Header/>
            <body>
                <section>
                    <CardColaborador/>
                </section>
            </body>
        </div>
    );
}

export default Colaboradores;