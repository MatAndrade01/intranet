import React from "react";
import "./styles.css"

const ButtonLink = ({href,children, src, target = "_self"}) => {
    return (
        <div className="containerButtonLink">
            <a href={href} className="linkButton" target={target}>
                <img src={src} alt="icon" className="imgButton"></img>
                <span className="nameButton">{children}</span>
            </a>
        </div>
    );
}

export { ButtonLink };
