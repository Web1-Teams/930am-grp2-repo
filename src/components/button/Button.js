//imports

import React from "react";
import "./Button.css"

//function

const Button=(props)=>{
    return(
        <button type={props.type} className={props.className} onClick={props.myFunction} >{props.name}</button>
    );
}

//export

export default Button;

