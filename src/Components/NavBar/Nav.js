import React from "react";
import { Link } from "react-router-dom";
import "../../Utility/style.css";

function Nav() {

    return (
        <> 
            

                <div className="navbar">
          <Link style={{textDecoration:0}}  to='/' >Home</Link>
          <Link style={{textDecoration:0}} to={"/IndianCinema"} >IndianCinema</Link>
          <Link style={{textDecoration:0}} to='/Hollywood' >Hollywood</Link>
          <Link style={{textDecoration:0}}  to="/Technology" >Technology</Link>
          <Link style={{textDecoration:0}}  to="/Anime" >Anime</Link>
                    <Link style={{textDecoration:0}}  to="/Fitness" >Digital Games</Link>
                    </div>
      
           
        </>

  )
};
export default Nav;