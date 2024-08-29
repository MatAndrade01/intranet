import './stylesCardColaborador.css'

const CardColaborador = ({src, childrenName, childrenDescrition}) => {
    return (
      <>
        <div className='cardColaboradorContainer'>
            <div className='topCardColaborador'>
              <div className='backgroundImgColaborador'>
                <img src={src} alt='Foto colaborador'className='imgColaborador'></img>
              </div>
            </div>
            <div className='bottomCardColaborador'>
              <div className='backgroundTextColaborador'>
              <h4 className='nameColaborador'>{childrenName}</h4>
              <p className='descritionColaborador'>{childrenDescrition}</p>
              </div>
            </div>
        </div>
      </>
    );
}

export {CardColaborador};