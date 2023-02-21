import React from "react";

let CardInfo =(prop)=>{
     return (
        <>
        <div className="CardInfo">
            <h1>{prop.title}</h1>
            <p>{prop.des}</p>
            <a href={prop.url}>Watch Now</a>
        </div>
        </>
     );
}

export default CardInfo;