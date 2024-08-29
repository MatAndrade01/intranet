import './stylesCardRamais.css';

const CardRamais = ({ title, ramais = [] }) => {
    return (
        <div className="containerCardRamaisMatriz">
            <div className="topCardRamaisMatriz">
                <p className='titleCardRamaisMatriz'>{title}</p>
            </div>
            <div className="bottomCardRamaisMatriz">
                {ramais.map((ramal, index) => (
                    <div key={index} className='ramalItemMatriz'>
                        <p className='ramalMatriz'>{ramal}</p>
                        {/* Renderize <hr> apenas se o ramal não for o último */}
                        {index < ramais.length - 1 && (
                            <hr className='hrCarRamaisMatriz' />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export { CardRamais };
