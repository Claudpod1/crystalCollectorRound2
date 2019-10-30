import React from "react";


function CrystalPics() {
 return(
     <div className ="card">
         <img className="card-img-top"  
         src={props.image} 
         alt={props.name}
         value={props.value}
          />
     </div>
 )
}

export default CrystalPics;
