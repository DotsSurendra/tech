import React from "react";
import Data from "./Data";
import Card from "./Card";

function App(){
  return (
          <>
          <div className="container">
            <div className="row">
              {Data.map((val,key)=><Card  imgsrc={val.Dimg} ctitle={val.Dtitle} cdes={val.Ddes} curl={val.curl} key={key}/>)}
            </div>
            </div>
          </>
        );
      }

export default App;
