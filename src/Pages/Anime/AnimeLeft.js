import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataBlog } from "../../DataContext/Object";
import "../PageTemplet/page.css";


function AnimeLeft() {
    const [dataValue] = useContext(DataBlog)
    const nav = useNavigate();

    const handleNavgate = (id, item) => {
        nav(`/accessdata/${id}`, { state: { details: item } });
    }
    return (
        <> <div >


        {
                        dataValue?.filter((item)=>item.category==="anime").map((item) => {
                          
                            return (
                                <>
                                   <div key={item.id} onClick={()=>handleNavgate(item.id,item)} >
                                    <div  className="leftchild" key={item.id} >
                                            <div><img className="image" src={item.image} alt="" style={{height:"15rem"}}></img> </div> 
                                                <div className="lefttext">
                                                <span>{item.title}</span><p className="para">{ item.Description}</p>
                                                </div>
                                    
                                           
                                            
                                        </div>
                                    </div>
                           
                                </>
                           
                               
                            )
                        })
                       
                        
                    }
        
        </div></>
       
    );
}
export default AnimeLeft;