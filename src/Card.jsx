import React from "react";
import CardInfo from "./CardInfo";
import Img from "./Image";


function Card(pros){
    return (
        <>
          <div className="Card">           
                <Img Isrc={pros.imgsrc}/>
                <CardInfo title={pros.ctitle} des={pros.cdes} url ={pros.curl} />
            </div>
        </>
    )
}
export default Card;
