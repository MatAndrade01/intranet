import './stylesCardAniversariante.css'

const CardAniversariante = ({src, childrenName, childrenData}) => {
    return (
      <>
        <div className='cardAniversarianteContainer'>
            <div className='topCardAniversariante'>
              <div className='backgroundImgAniversariante'>
                <img src={src} alt='Foto colaborador'className='imgAniversariante'></img>
              </div>
            </div>
            <div className='bottomCardAniversariante'>
              <div className='backgroundTextAniversariante'>
              <h4 className='nameAniversariante'>{childrenName}</h4>
              <p className='descritionAniversariante'>{childrenData}</p>
              </div>
            </div>
        </div>
      </>
    );
}

export {CardAniversariante};