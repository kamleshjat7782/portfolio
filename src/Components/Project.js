import React from "react";
import Cards from "./Cards";
import Cdata from "./Cdata";

function Project() {
  return (
    <>
    
      
        <div className="service-containet ">
          <h1>Projects </h1>
          
        </div>
     

            <div className="project-page">
           {
             Cdata.map((val, ind) =>{
               return(
                 <Cards
                 project     = {val.project}
                 img         = {val.img}
                 discription = {val.discription}
                 button       = {val.button}
                 />
                 )
                })
              }
              </div>
          
          



    </>
  );
}

export default Project;
