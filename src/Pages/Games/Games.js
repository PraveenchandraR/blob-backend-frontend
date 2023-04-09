import React, { useEffect } from "react";
import Head from "../../Components/HeaderComponent/Head";
import GameLeft from "./GameLeft";
import GameRight from "./gameRight";

const Games = () => {
      useEffect(() => {
     fetch("http://localhost:3002/games").then((res)=>res.json()).then((res)=>console.log(res))
 })
    return (
        <>
            <div className="games">
            <Head />
                <h2>Digital Games</h2>
                <hr></hr>
                
                <div className="Templet" >
            <div className="left">< GameLeft/></div>
            
            <div className="righttemplet"><GameRight /></div>
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
export default Games;