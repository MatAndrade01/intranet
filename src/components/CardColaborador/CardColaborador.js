import './styles.css'

const CardColaborador = ({src, childrenName, childrenDescrition}) => {
    return (
      <>
        <div className='cardContainer'>
            <div className='topCard'>
              <img src={src} alt='Foto colaborador'></img>
            </div>
            <div className='bottomCard'>
              <h4>{childrenName}</h4>
              <p>{childrenDescrition}</p>
            </div>
        </div>
      </>
    );
}

export {CardColaborador};