import React from "react";

function Card(pros){
    return (
          <>
          <div className="Card">
            <div className="CardImag">
                <img src={pros.imgsrc} />
            </div>
            <div className="CardInfo">
                <h1>{pros.ctitle}</h1>
                <p>{pros.cdes}</p>
                <a href={pros.curl}>Watch Now</a>
            </div>

          </div>
          </>
    )
}
export default Card;
