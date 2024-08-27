import { Children } from 'react';
import './stylesComunicado.css'

const CardComunicado = ({href, target, src, childrenTitle, childrenDescrition, childrenTextImportant}) => {
    return (
        <>
        
        <a href={href} target={target} className='linkComunicado'>
            
            <div className='cardComunicadoContainer'>
                <div className='textImportante'>
                    <p>{childrenTextImportant}</p>
                </div>
                <div className='topCardComunicado'>
                    <div className='backgroundLogPemotos'>
                        <img src={src} alt='Logo PeMotos'className='logoComunicado'></img>
                    </div>
                </div>
                <div className='bottomCardComunicado'>
                    <div className='backgroundTextComunicado'>
                        <h6 className='titleComunicado'>{childrenTitle}</h6>
                        <p className='descritionComunicado'>{childrenDescrition}</p>
                    </div>
                </div>
            </div>
        </a>
      </>
    );
}

export { CardComunicado };