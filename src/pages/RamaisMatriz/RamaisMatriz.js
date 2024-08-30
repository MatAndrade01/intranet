import './stylesRamaisMatriz.css'
import { Header } from "../../components/Header/Header";
import { CardRamais } from "../../components/CardRamais/CardRamais";
import { Footer } from "../../components/Footer/Footer"

function RamaisMatriz() {
    // Lista de cartões, onde cada cartão tem um título e uma lista de ramais
    const cards = [
        {
            title: 'Administrativo 📂',
            ramais: [
                'Betânia Recepção - 8900', 
                'Hermínio Gerente - 8920',
                'Hermínio Gerente - 8920',
                'Vinícius BackOffice - 8924',
                'Rose DP - 8940',
                'Íkaro DP - 8941',
                'Elaine DP - 8942',
                'Leandro TI - 8921',
                'Suporte TI - 8922',
                'Anexo TI - 8970',
                'Sala de Reunião - 8945',
            ]
        },
        {
            title: 'Financeiro 💹',
            ramais: [
                'Sandra Gestora - 8930',
                'Tesouraria - 8931',
                'Receber Humberto - 8933',
                'Danielle/Elisia - 8934',
                'Pagar Matheus/Silvio - 8935',
                'Caixa - 8936',
                'William/Fernando - 8968',
                '____________________________',
                '____________________________',
                '____________________________',
                '____________________________',
            ]
        },
        {
            title: 'Contabilidade 📊',
            ramais: [
                'Romulo Gestor - 8946',
                'Isabele Cadastro - 8947',
                'Iarla Cadastro - 8947',
                'Mykael Cadastro - 8947',
                'Leninha Fiscal - 8948',
                'Ana Maria/Yngris - 8949',
                '____________________________',
                '____________________________',
                '____________________________',
                '____________________________',
                '____________________________',
            ]
        },
        {
            title: 'Veículos Novos 🏍️',
            ramais: [
                'Dandara Gestora - 8902',
                'Mariana - 8903',
                'Andréia - 8904',
                'Mikael - 8905',
                'Grace - 8906',
                'Celiane - 8967',
                'Edson L. F&I - 8965',
                '____________________________',
                '____________________________',
                '____________________________',
                '____________________________',
            ]
        },
        {
            title: 'Consórcio CNH 💭',
            ramais: [
                'Roberto Gestor - 8956',
                'Ceiça - 8957',
                'Simone - 8958',
                'Tatiana - 8959',
                'Vinicius - 8961',
                'Izabel - 8962',
                'Cristina - 8986',
                '____________________________',
            ]
        },
        {
            title: 'Pós - Vendas 📞',
            ramais: [
                'Bruno Andrade Gerente - 8950',
                'Eliza - 8951',
                'Fran - 8952',
                'Daniel Consultor - 8953',
                'Flávia Consultora - 8954',
                'Gisleny - 8955',
                'Silvana - 8997',
                'Layse - 8998',
            ]
        },
        {
            title: 'Logist. Seguro/Entreg. 🛠️ 🔐',
            ramais: [
                'Vítor Gestor - 8979',
                'João V. Entrega - 8971',
                'Mônica Seguro - 8972',
                'Entregador - 8973',
                '____________________________',
                '____________________________',
                '____________________________',
                '____________________________',
            ]
        },
        {
            title: 'Peças 🔩',
            ramais: [
                'Oséias Estoque - 8915',
                'Juliana - 8916',
                'Joana - 8917',
                '____________________________',
                '____________________________',
                '____________________________',
                '____________________________',
                '____________________________',
            ]
        },
        {
            title: 'WEB / Marketing 📲',
            ramais: [
                'Marketing - 8969',
                'Hialy - 8927',
                'Nubia - 8987',
                'Jovem Aprendiz - 8989',
                'Laiz - 8990',
                'Meriene - 8991',
                'Maria Julia - 8992',
                'Daniela - 8993',
                'Jarderson - 8994',
            ]
        },
        {
            title: 'WEB 📲',
            ramais: [
                'Fernando Gestor - 8980',
                'Mirela - 8981',
                'Tiago - 8982',
                'Aline - 8983',
                'Jéssica - 8984',
                'Cinthya - 8985',
                'Nubia - 8987',
                'Jovem Aprendiz - 8988',
                'Jovem Aprendiz - 8989',
            ]
        },
        {
            title: 'Seminovos 🏍️',
            ramais: [
                'Lúcia Gestora - 8975',
                'Alirio - 8976',
                'Debora - 8977',
                'Seminovos 03 - 8977',
                'Seminovos 04 - 8977',
                '____________________________',
                '____________________________',
                '____________________________',
                '____________________________',
            ]
        },
        
    
    ];

    return (
        <div>
            <Header />
            <div className="bodyRamaisMatriz">
                <section className="sectionRamaisMatriz">
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

export default RamaisMatriz;
