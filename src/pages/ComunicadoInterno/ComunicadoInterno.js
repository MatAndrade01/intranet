import './stylesComunicadoInterno.css'
import { Header } from "../../components/Header/Header";
import { CardComunicadoInterno } from '../../components/CardComunicadoInterno/CardComunicadoInterno';
import LogoPemotos from '../../assets/imageComunicado/logoColorida.png'
import { Footer } from '../../components/Footer/Footer';

function ComunicadoInterno() {
    return (
        
        <div>
            <Header/>
            <div className='bodyComunicado'>
                <h2 className='titleComunicadopage'>Comunicados</h2>
                <section className='sectionComunicado'>
                <CardComunicadoInterno src={LogoPemotos} href="http://192.168.1.56/intranet/arquivos_dowloads/codigo_etica.pdf" target='_blank' childrenTitle='Código de Ética' childrenDescrition='Pernambuco Motos' childrenTextImportant='código de ética de uma empresa é fundamental para garantir que todos os colaboradores compreendam e sigam os princípios e normas que regem o comportamento dentro da organização.'/>
                <CardComunicadoInterno src={LogoPemotos} href="http://192.168.1.56/intranet/arquivos_dowloads/Relat%C3%B3rio%20PDF_10144013000198_%20PAULISTA.pdf" target='_blank' childrenTitle='Pernambuco Motos / Guanabara Motos' childrenDescrition='Relatório de Transparência e Igualdade Salarial de Mulheres e Homens' childrenTextImportant='Esses relatórios fornecem dados detalhados sobre a remuneração de homens e mulheres dentro de uma organização, permitindo a identificação de desigualdades e práticas injustas.'/>
                <CardComunicadoInterno src={LogoPemotos} href="http://192.168.1.56/intranet/arquivos_dowloads/SETOR%20M.S.V.pdf" target='_blank' childrenTitle='Movimento de Motos' childrenDescrition='Procedimento para Movimentação de motos' childrenTextImportant='Procedimento para Movimentação de Motos refere-se às diretrizes e processos envolvidos na gestão e registro de motos para fins fiscais e contábeis.'/>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default ComunicadoInterno;