import React from "react";
import "./style.css";

import { useLocation } from "react-router-dom";
import Head from "../Components/HeaderComponent/Head";



function AccessData() {
   
    const Location = useLocation();
  
    console.log("loction", Location);
    return (
        
        <>
            <Head />
            
            <hr></hr>
            <div className="picture">
                <div className="details" style={{border:"1px solid blck" }}>
                    <h1>---Details---</h1>
                  
                    <h1>{Location?.state?.details?.title} </h1> 
                    <div style={{ width: "300px", height: "300px" }}> 
                       <h2>{Location?.state?.details.release}</h2> <br></br>
                          <div> <img className="image"style={{ backgroundImage: `url(${Location?.state?.details?.image})`, }} alt="" />  </div><br></br>
                      <p className="paragraph" style={{color:"aqua"}}> {Location?.state?.details?.Description}</p> <br>
                        </br>
                    
                        {Location?.state?.details?.rating}
                        
                    </div>
                  
                </div>
                <div>
              
                </div>
       






            </div>
        
        </>
    );
}
export default AccessData;