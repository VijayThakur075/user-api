import React, { useEffect, useState } from "react";
import axios from "axios";

const Coments= () =>{
    const[cmt, setCmt]=useState();

    useEffect(() => {
        async function getComent(){
            const response =await axios.get('http://localhost:3008/comments');
            setCmt(response.data);
        }
        
    });

    return(
        <>
        <div>
            <h3>ID</h3>
                  {cmt.map(comments => (
                      <div key={comments.id}>{comments.userId}</div>
                  ))}
            
        </div>
        </>
    )

}
export default Coments;