import React from "react";

let Img = (prop) => {
    return (
            <>
            <div className="CardImag">
                <img src ={prop.Isrc} />
            </div>
            </>
        );
} 
export default Img;