import './stylesCardColaborador.css'

const CardColaborador = ({src, childrenName, childrenDescrition}) => {
    return (
      <>
        <div className='cardContainer'>
            <div className='topCardColaborador'>
              <div className='backgroundImg'>
                <img src={src} alt='Foto colaborador'className='imgColaborador'></img>
              </div>
            </div>
            <div className='bottomCard'>
              <div className='backgroundText'>
              <h4 className='nameColaborador'>{childrenName}</h4>
              <p className='descritionColaborador'>{childrenDescrition}</p>
              </div>
            </div>
        </div>
      </>
    );
}

export {CardColaborador};