import './stylesCardFeriadosMensais.css'


const CardFeriadosMensais = ({feriados = []}) => {
    return (
        <div className='containerCardFeriadosMensais'>
            <div className='bodyCardFeriadosMensais'>
                {feriados.map((feriado, index) => (
                    <div key={index} className='FeriadoItem'>
                        <p className='feriado'>{feriado}</p>
                        {index < feriados.length - 1 && (
                            <hr className='hrCardFeriadosMensais' />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export { CardFeriadosMensais };