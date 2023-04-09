import React, { useEffect } from "react";
import Head from "../../Components/HeaderComponent/Head";
import TechLeft from "./TechLeft";
import TechRight from "./TechRight";


const Technology = () => {
      useEffect(() => {
     fetch("http://localhost:3002/technology").then((res)=>res.json()).then((res)=>console.log(res))
 })
    return (
        <>
            <div className="technology">
             <Head />
                <h2>Technology</h2> 
                <hr></hr>
                   <div className="Templet">
            <div className="left"><TechLeft /></div>
            
            <div className="righttemplet"><TechRight /></div>
                </div>
                <br></br>
            <hr></hr>
            <footer> <pre>--React Blob Project
              @Rights reserved by Praveen Chandra Ravuri
                                       Prepbytes Coaching Acedamy --
            </pre></footer>
        </div>
        </>
    )
}
export default Technology;