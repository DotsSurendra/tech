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
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12"> 
          <div className=" Card card  text-center h-400">
            <Img Isrc={pros.imgsrc}/>
            <CardInfo title={pros.ctitle} des={pros.cdes} url ={pros.curl} />
          </div>
          </div>

        </>
    )
}

export default Card;
