import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../PageTemplet/page.css";
import { DataBlog } from "../../DataContext/Object";
function TechRight() {
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
                    dataValue.filter((item)=> item.category=== 'technology').map((item) => {
                        return (
                            <>
                           
                                <div key={item.id}>
                                     
                                    <div key={item.id} >
                                    
                                        <div className="rightchild" key={item.id} onClick={()=>handleNav(item.id,item)}>
                                            <div key={item.id}><img className="imageright" src={item.image} alt="" />  </div>
                                            <div className="righttext">  <span>{item.title}</span><br></br>
                                            <span className="para" >Market:{item.Market}</span><br></br>
                                            <span className="para">Growth:{item.Growth}</span></div>
                                           
                                         
                                    
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
export default TechRight;