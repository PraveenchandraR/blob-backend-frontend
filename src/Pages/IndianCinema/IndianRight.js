import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../PageTemplet/page.css";
import { DataBlog } from "../../DataContext/Object";



function IndianRight() {
    const [dataValue] = useContext(DataBlog);
    const nav = useNavigate();

    const handleNavgate=(id,item)=>{
        nav(`/accessdata/${id}`, { state: { details: item } });
    }

    return (
        <>
        
            <div>
             <h1 style={{marginTop:"2px"}}>Top Posts</h1>
                {
                    dataValue?.filter((item) => item.category === "indianCinema").map((item)=>{
                    return(
                        <div key={item.id}>
                              <div   onClick={()=>handleNavgate(item.id,item)} >
                                    
                                        <div className="rightchild" key={item.id} >
                                            <div><img className="imageright" src={item.image} alt="" />  </div>
                                            <div className="righttext">  <span>{item.title}</span><br></br>
                                            <span className="para">{item.release}</span><br></br>
                                            <span className="para">{item.Rating}</span></div>
                                           
                                         
                                    
                                        </div>
                                    </div>
                          </div>
                    )
                    })
            }
            </div></>
    );

} export default IndianRight;