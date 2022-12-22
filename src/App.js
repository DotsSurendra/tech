import React from "react";
import Data from "./Data";
import Card from "./Card";

function App(){
  return (<>
          <div className="Cards">
            
  
            {Data.map((val,key)=>{return(<Card  imgsrc={val.Dimg} ctitle={val.Dtitle} cdes={val.Ddes} curl={val.curl} key={key}/>)})}

           
            </div>
          </>
  
  
  );
}

export default App;
