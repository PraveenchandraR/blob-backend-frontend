import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../PageTemplet/page.css";
import { DataBlog } from "../../DataContext/Object";
function GameLeft() {
    const [dataValue] = useContext(DataBlog)
    const Nav = useNavigate();
    const handleNav = (id,item) => {
        Nav(`/accessdata/${id}`,{state:{details:item}})
    }
    return (
        <> 


        {
                        dataValue?.filter((item)=> item.category==="games").map((item,index) => {
                          
                            return (
                                <>
                                   <div key={index} >
                                    <div  className="leftchild" onClick={()=>handleNav(item.id,item)} >
                                            <div><img className="image" src={item.image} alt="cinema"></img> </div> 
                                                <div className="lefttext">
                                                <span>{item.title}</span><p className="para">{ item.Description}</p>
                                                </div>
                                    
                                           
                                            
                                        </div>
                                    </div>
                           
                                </>
                           
                               
                            );
                        })
                       
                        
                    }
        
        </>
       
    );
}
export default GameLeft;