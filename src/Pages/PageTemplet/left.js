import React, { useContext } from "react";
import { DataBlog } from "../../DataContext/Object";
import "./page.css";
function Lefttemplet() {
    const [dataValue]=useContext(DataBlog)
    return (
        <> <div >


        {
                        dataValue.map((items,index) => {
                          
                            return (
                                <>
                                   <div id='items.id' >
                                    <div  className="leftchild" key={index}>
                                            <div><img className="image" src={items.image} alt="cinema"></img> </div> 
                                                <div className="lefttext">
                                                <span className="para">{items.title}</span><p className="para">{ items.Description}</p>
                                                </div>
                                    
                                           
                                            
                                        </div>
                                    </div>
                           
                                </>
                           
                               
                            );
                        })
                       
                        
                    }
        
        </div></>
       
    );
}
export default Lefttemplet;