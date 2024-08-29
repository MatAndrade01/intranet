import './stylesHome.css'
import { Header } from "../../components/Header/Header";
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';
import Cloud from "../../assets/imageHome/cloud.png"
import UnicoAuto from "../../assets/imageHome/unicoAuto.png"
import Dialugo from "../../assets/imageHome/telephone.png"
import Credere from "../../assets/imageHome/credere.png"
import FiscoContabil from "../../assets/imageHome/fiscoContabil.png"
import IHS from "../../assets/imageHome/ihs.png"
import CofreSieg from "../../assets/imageHome/cofreSieg.png"
import SuporteTI from "../../assets/imageHome/suporteTI.png"
import WebMail from "../../assets/imageHome/webMail.png"

function Home() {


  return (
    <div className="App">
      <Header />
      <body>
        <section>
          <div className='containerSectionHome'>
            <div className="containerTextHome">
              <h2 className='titleHome'> Entre nos Sistemas pra agilizar seu dia a dia</h2>
              <h3 className='subTitleHome'>Confira alguns atalhos que preparamos pra você</h3>
            </div>
            <div className="containerButtonsLinkHome">
              <ButtonLink src={Cloud} href='https://microworkcloud.com.br/'children='Cloud' target='_blank'/>
              <ButtonLink src={UnicoAuto} href='https://app.vianuvem.com.br/'children='Único Auto' target='_blank'/>
              <ButtonLink src={Dialugo} href='https://app.gvpomni.com/#/login'children='Dialugo' target='_blank'/>
              <ButtonLink src={Credere} href='https://app.meucredere.com.br/d/users/sign_in'children='Credere' target='_blank'/>
              <ButtonLink src={FiscoContabil} href='https://gestaocontabil.microworkcloud.com.br/'children='Fisco Contabil' target='_blank'/>
              <ButtonLink src={IHS} href='https://www.hondaihs.com.br/HondaWEBMenuIHS/public/login.jsf'children='IHS' target='_blank'/>
              <ButtonLink src={CofreSieg} href='https://auth.sieg.com/'children='Cofre Sieg' target='_blank'/>
              <ButtonLink src={SuporteTI} href='https://servidorseguro.mysuite2.com.br/client/login.php?sl=perm#'children='Suport TI' target='_blank'/>
              <ButtonLink src={WebMail} href='https://webmail.pernambucomotos.com.br/'children='WebMail' target='_blank'/>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Home;
