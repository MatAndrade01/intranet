import React from "react";
import "./stylesButtonLink.css"

const ButtonLink = ({href,children, src, target = "_self"}) => {
    return (
        <div className="containerButtonLink">
            <a href={href} className="linkButton" target={target}>
                <img src={src} alt="icon" className="imgButtonLink"></img>
                <span className="nameButtonLink">{children}</span>
            </a>
        </div>
    );
}

export { ButtonLink };
