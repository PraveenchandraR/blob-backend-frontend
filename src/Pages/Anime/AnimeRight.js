import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../PageTemplet/page.css";
import { DataBlog } from "../../DataContext/Object";
function AnimeRight() {
    const [dataValue] = useContext(DataBlog);
    const Nav = useNavigate();
    const handleNav = (id,item) => {
        Nav(`/accessdata/${id}`,{state:{details:item}})
    }
    return (
        
        <>
            <div>
                    <h2 style={{marginTop:"2px"}}>Top Posts</h2>
                {
                    dataValue.filter((item)=> item.category=== "anime").map((item) => {
                        return (
                            <>
                           
                                <div key={item.id} onClick={()=>handleNav(item.id,item)}>
                                     
                                    <div >
                                    
                                        <div className="rightchild" >
                                            <div><img className="imageright" src={item.image} alt="" style={{height:"10rem"}}/>  </div>
                                            <div className="righttext">  <span>{item.title}</span><br></br>
                                            <span>{item.release}</span><br></br>
                                            <span>{item.Rating}</span></div>
                                           
                                         
                                    
                                        </div>
                                    </div>
                                </div>
                            
                            </>

                         )


                     })
            }
                
            </div>
        </>
    );

}
export default AnimeRight;