import React from "react";

function Wrapper(props){
    return (
        <div className="row">
            <div className="col-1">
                <div className="wrapper">{props.children}</div>
            </div>
        </div>
    )
}

export default Wrapper; 