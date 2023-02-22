import React from "react";

let CardInfo =(prop)=>{
     return (
        <>
            <div className="card-body CardInfo ">
                <h2 className="card-title text-center">{prop.title}</h2>
                <p className="card-text text-center">{prop.des}</p>
                <a href={prop.url} className="btn btn-primary">Watch Now</a>
            </div>
        </>
     );
}

export default CardInfo;