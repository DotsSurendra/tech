import React from "react";
import CardInfo from "./CardInfo";
import Img from "./Image";


// function Card(pros){
//     return (
//         <>
//           <div className="col-4">           
//                 <Img Isrc={pros.imgsrc}/>
//                 <CardInfo title={pros.ctitle} des={pros.cdes} url ={pros.curl} />
//             </div>

//         </>
//     )
// }
function Card(pros){
    return (
        <>
        <div className="col-12 col-md-3 col-sm-4"> 
          <div className=" Card card  text-center h-400">
            <Img Isrc={pros.imgsrc}/>
            <CardInfo title={pros.ctitle} des={pros.cdes} url ={pros.curl} />
          </div>
          </div>

        </>
    )
}

export default Card;
