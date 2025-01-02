//imports

import React from "react";
import "./ErrorMsg.css"

//functions

const ErrorMsg=(props)=>{
    return(
    <small className={props.className}>{props.value}</small>
    );
}

//export

export default ErrorMsg;