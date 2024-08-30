import './stylesComunicadoInterno.css'

const CardComunicadoInterno = ({href, target, src, childrenTitle, childrenDescrition, childrenTextImportant}) => {
    return (
        <>
        <a href={href} target={target} className='linkComunicadoInterno'>
            <div className='cardComunicadoInternoContainer'>
                <div className='textImportante'>
                    <p>{childrenTextImportant}</p>
                </div>
                <div className='topCardComunicadoInterno'>
                    <div className='backgroundLogPemotosComunicadoInterno'>
                        <img src={src} alt='Logo PeMotos'className='logoComunicadoInterno'></img>
                    </div>
                </div>
                <div className='bottomCardComunicadoInterno'>
                    <div className='backgroundTextComunicadoInterno'>
                        <h6 className='titleComunicadoInterno'>{childrenTitle}</h6>
                        <p className='descritionComunicadoInterno'>{childrenDescrition}</p>
                    </div>
                </div>
            </div>
        </a>
      </>
    );
}

export { CardComunicadoInterno };