import './styles.css';
import { Link } from 'react-router-dom'; // Importe Link do react-router-dom
import Logo from '../../assets/imageHeader/logoPeMotos.png'

const Header = () => {
    return (
        <div className='container'>
            <div className='image'>
                <img src={Logo} alt='Logo' className='logoPe' />
            </div>
            <ul className='navigation'>
                <li className='liNav'><Link to='/' className='linkNav'>Home</Link></li>
                <li className='liNav'><Link to='/aniversario' className='linkNav'>Aniversário</Link></li>
                <li className='liNav'><Link to='/colaboradores' className='linkNav'>Colaboradores</Link></li>
                <li className='liNav'>
                    <a href='#' className='linkNav'>Comunicados</a>
                    <ul className='notificationMenu'>
                        <li className='liNotification'><a href='#' className='linkNotification'>Código de Ética</a></li>
                        <li className='liNotification'><a href='#' className='linkNotification'>Feriados Mensais</a></li>
                        <li className='liNotification'><a href='#' className='linkNotification'>Comunicado Interno</a></li>
                    </ul>
                </li>
                <li className='liNav'>
                    <a href='#' className='linkNav'>Ramais</a>
                    <ul className='telephoneMenu'>
                        <li className='liTelephone'><a href='#' className='linkTelephone'>Matriz</a></li>
                        <li className='liTelephone'><a href='#' className='linkTelephone'>Filial</a></li>
                    </ul>
                </li>
                <li className='liNav'>
                    <a href='#' className='linkNav'>Corrida dos Campeões</a>
                    <ul className='runMenu'>
                        <li className='liRun'><a href='#' className='linkRun'>Desafio dos Campeões</a></li>
                        <li className='liRun'><a href='#' className='linkRun'>Pernambuco Motos</a></li>
                        <li className='liRun'><a href='#' className='linkRun'>Alagoas Motos</a></li>
                        <li className='liRun'><a href='#' className='linkRun'>Guanabara Motos</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export { Header };
