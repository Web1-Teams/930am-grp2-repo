//imports
import react from "react";
import ErrorMsg from "../checkoutform(error msg)/ErrorMsg";

//function

const Inputdiv=(props)=>{
    return(<>      
    <div className="mb-3">
        <input type={props.type} className="form-control" placeholder={props.placeholder} onChange={props.changeFucntion}/>
        <ErrorMsg className="error-msg" value={props.msgvalue}/>
    </div>
    </>);
}

//export

export default Inputdiv;