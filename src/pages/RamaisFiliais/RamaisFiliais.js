import './stylesRamaisFiliais.css'
import { Header } from "../../components/Header/Header";
import { CardRamais } from '../../components/CardRamais/CardRamais';
import { Footer } from '../../components/Footer/Footer';

function RamaisFilias() {
    
    const cards = [
        {
            title: 'Jaboatão',
            ramais: [
                'Gerente - Tavares 9654', 
                'Caixa - Sylvia 9650',
                'Novos - Felipe 9655',
                'Novos - Sonally 9656',
                'Peças Balcão - Fernando 9652',
                'Oficina - Leticia 9653',
            ]
        },
        {
            title: 'Boa Viagem',
            ramais: [
                'Gerente -',
                'Caixa - Fernando 5050',
                'Novos - Marcos 5051',
                'Novos - Flavinha 5052',
                'Peças Balcão - Antonio 5053',
                'Oficina - Letícia 9653',
            ]
        },
        {
            title: 'Igarassu',
            ramais: [
                'Gerente -',
                'Caixa - Naiara 7250',
                'Novos - Bruno 7251',
                'Novos -',
                'Peças Balcão - Isabelly 7252',
                'Oficina - Isabelly 7252',
            ]
        },
        {
            title: 'Paudalho',
            ramais: [
                'Gerente -',
                'Caixa - Fernando 5400',
                'Novos - Karyne 5401',
                'Novos -',
                'Peças Balcão - Elias 5403',
                'Oficina - Alan 5402',
            ]
        },
        {
            title: 'Encruzilhada',
            ramais: [
                'Gerente -',
                'Caixa - Cassandra 6900',
                'Novos - Alane 6902',
                'Novos -',
                'Peças Balcão - Isis 6901',
                'Oficina - Isis 6901',
            ]
        },
        {
            title: 'Camaragibe',
            ramais: [
                'Gerente -',
                'Caixa - Rosely 9350',
                'Novos - Felipe 9351',
                'Novos - Marijane 9352/9353',
                'Peças Balcão -',
                'Oficina -',
            ]
        },
        {
            title: 'Peixinhos',
            ramais: [
                'Gerente -',
                'Caixa -',
                'Novos - Jozi 9555',
                'Novos -',
                'Peças Balcão - Flavia 9556',
                'Oficina -',
            ]
        },
        {
            title: 'Beberibe',
            ramais: [
                'Gerente -',
                'Caixa - Gabriel 9600',
                'Novos - Barbara 9601',
                'Novos -',
                'Peças Balcão - Anderton 9602',
                'Oficina - Anderton 9602',
            ]
        },
        {
            title: 'Graças',
            ramais: [
                'Gerente -',
                'Caixa - Priscila 2416',
                'Novos - Silvio 2417',
                'Novos -',
                'Peças Balcão - Vanessa 2418',
                'Oficina - Vanessa 2418',
            ]
        },
        {
            title: 'Pina',
            ramais: [
                'Gerente -',
                'Caixa -',
                'Novos - Rosely 4652',
                'Novos -',
                'Peças Balcão -',
                'Oficina -',
            ]
        },
        {
            title: 'Bairro Novo',
            ramais: [
                'Gerente -',
                'Caixa -',
                'Novos -',
                'Novos -',
                'Peças Balcão -',
                'Oficina -',
            ]
        },
        
    
    ];

    return (
        <div>
            <Header />
            <div className="bodyRamaisFilial">
                <section className="sectionRamaisFilial">
                    {cards.map((card, index) => (
                        <CardRamais
                            key={index}
                            title={card.title}
                            ramais={card.ramais}
                        />
                    ))}
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default RamaisFilias;