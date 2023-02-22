import React from "react";

let Img = (prop) => {
    return (
            <>
            <div className="CardImag">
                <img src ={prop.Isrc} alt='not found' className="card-img-top" />
            </div>
            </>
        );
} 
export default Img;