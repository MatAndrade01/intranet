import './stylesCardRamais.css';

const CardRamais = ({ title, ramais = [] }) => {
    return (
        <div className="containerCardRamais">
            <div className="topCardRamais">
                <p className='titleCardRamais'>{title}</p>
            </div>
            <div className="bottomCardRamai">
                {ramais.map((ramal, index) => (
                    <div key={index} className='ramalItem'>
                        <p className='ramal'>{ramal}</p>
                        {/* Renderize <hr> apenas se o ramal não for o último */}
                        {index < ramais.length - 1 && (
                            <hr className='hrCarRamais' />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export { CardRamais };
