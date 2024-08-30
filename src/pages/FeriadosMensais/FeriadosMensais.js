import './stylesFeriadosMensais.css'
import { Header } from '../../components/Header/Header';
import { CardFeriadosMensais } from '../../components/CardFeriadosMensais/CardeFeriadosMensais';
import { Footer } from '../../components/Footer/Footer';

function FeriadosMensais() {
    
    const cardFeriados = [
        {
            feriados: [
                '06/08 - São Salvador - Olinda/PE (Municipal)',
                '15/08 - Emancipação da Cidade - Maricá/RJ (Municipal)',
                '27/08 - Nossa Sra dos Prazeres - Maceió/AL (Municipal)',
            ]
        }
    ]

    return(
        <div>
            <Header />
            <div className="bodyFeriadosMensais">
                <section className="sectionFeriadosMensais">
                    <h2 className='titleFeriadosMensais'>Avisos - Agosto</h2>
                    <div className='containerFeriadosMensais'>
                        {cardFeriados.map((card, index) => (
                            <CardFeriadosMensais
                                key={index}
                                feriados={card.feriados}
                            />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default FeriadosMensais;