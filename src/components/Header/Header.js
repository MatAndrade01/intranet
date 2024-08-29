import './styles.css';
import { Link } from 'react-router-dom'; // Importe Link do react-router-dom
import Logo from '../../assets/imageHeader/logoPeMotos.png'

const Header = () => {
    return (
        <div className='containerHearder'>
            <div className='imageHeader'>
                <img src={Logo} alt='Logo' className='logoPeHeader' />
            </div>
            <ul className='navigation'>
                <li className='liNavHeader'><Link to='/' className='linkNavHeader'>Home</Link></li>
                <li className='liNavHeader'><Link to='/aniversario' className='linkNavHeader'>Aniversário</Link></li>
                <li className='liNavHeader'><Link to='/colaboradores' className='linkNavHeader'>Colaboradores</Link></li>
                <li className='liNavHeader'>
                    <a href='#' className='linkNavHeader'>Comunicados</a>
                    <ul className='notificationMenuHeader'>
                        <li className='liNotificationHeader'><a href='/comunicado' className='linkNotificationHeader'>Comunicados Interno</a></li>
                        <li className='liNotificationHeader'><a href='#' className='linkNotificationHeader'>Feriados Mensais</a></li>
                    </ul>
                </li>
                <li className='liNavHeader'>
                    <a href='#' className='linkNavHeader'>Ramais</a>
                    <ul className='telephoneMenuHeader'>
                        <li className='liTelephoneHeader'><a href='/ramaismatriz' className='linkTelephoneHeader'>Matriz</a></li>
                        <li className='liTelephoneHeader'><a href='/ramaisfiliais' className='linkTelephoneHeader'>Filial</a></li>
                    </ul>
                </li>
                <li className='liNavHeader'>
                    <a href='#' className='linkNavHeader'>Corrida dos Campeões</a>
                    <ul className='runMenuHeader'>
                        <li className='liRunHeader'><a href='#' className='linkRunHeader'>Desafio dos Campeões</a></li>
                        <li className='liRunHeader'><a href='#' className='linkRunHeader'>Pernambuco Motos</a></li>
                        <li className='liRunHeader'><a href='#' className='linkRunHeader'>Alagoas Motos</a></li>
                        <li className='liRunHeader'><a href='#' className='linkRunHeader'>Guanabara Motos</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export { Header };
