import React from "react";
import './Button.css';
/**
 * Generic Button that will be used throughout website for multiple reasons.
 * props: text, link
 * @returns 
 */
const Button = (props) => {

    return (
        <div className="GenericButton">
            <button class={props.name}>
                <a href={props.link}>{props.text}</a>
            </button>
        </div>
    );

}

export default Button;