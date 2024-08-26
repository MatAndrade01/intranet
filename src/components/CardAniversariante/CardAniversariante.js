import './styles.css'

const CardAniversariante = ({src, childrenName, childrenData}) => {
    return (
      <>
        <div className='cardContainer'>
            <div className='topCard'>
              <div className='backgroundImg'>
                <img src={src} alt='Foto colaborador'className='imgAniversariante'></img>
              </div>
            </div>
            <div className='bottomCard'>
              <div className='backgroundText'>
              <h4 className='nameAniversariante'>{childrenName}</h4>
              <p className='descritionAniversariante'>{childrenData}</p>
              </div>
            </div>
        </div>
      </>
    );
}

export {CardAniversariante};