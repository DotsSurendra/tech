import React from "react";

let Img = (prop) => {
    return (
            <>
            <div className="CardImag">
                <img src ={prop.Isrc} alt='not found' />
            </div>
            </>
        );
} 
export default Img;