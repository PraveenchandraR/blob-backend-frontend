import React, { useContext } from "react";

import "./IC.css";


import { useNavigate } from "react-router-dom";
import { DataBlog } from "../../DataContext/Object";


function NewFile()
{
    const [dataValue] = useContext(DataBlog);
    const Nav = useNavigate();

    const handleNavgate = (id, item) => {
        
        Nav(`/accessdata/${id}`,{state:{details:item}})
    }
   
    return (
        <>
            <div>
                
               
                    
                    {
                        dataValue?.filter((item)=> item.category === 'indianCinema').map((item) => {
                          
                            return (
                                <>
                                   <div key={item.id}>
                                        <div  onClick={()=>handleNavgate(item.id,item)}>
                                    <div  className="leftchild" key={item.id} >
                                            <div><img className="image" src={item.image} alt="cinema"></img> </div> 
                                            <div className="lefttext">
                                                <span>{item.title}</span><p className="para">{ item.Description}</p>
                                                </div>
                                   
                                           
                                            </div>
                                        </div>
                                    </div>
                        
                                </>
                            );
                        })
                       
                        
                    }
   
         
            
              
                
            </div>
        </>
    );
}
export default NewFile;