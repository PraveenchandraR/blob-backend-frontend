import React, { useEffect } from "react";
import Head from "../../Components/HeaderComponent/Head";

import "../PageTemplet/page.css";

import HollyLeft from "./HollyLeft";
import HollyRight from "./HollyRight";


const Hollywood = () => {
    useEffect(() => {
        fetch("http://localhost:3002/hollywood").then((res)=>res.json()).then((res)=>console.log(res))
    })
    return (
        <>
            <div className="hollywood">
               <Head />
                <h2>Hollywood</h2>
                <hr></hr>
                     <div className="Templet">
            <div className="left"><HollyLeft /></div>
            
            <div className="righttemplet"><HollyRight /></div>
                </div>
                <br></br>
                <br></br>
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
export default Hollywood;