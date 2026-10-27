import React, { useState } from "react";

const ContadorLikes=()=>{
    const likes = 0;
    const dislikes = 0;

    const [ContadorLikes,setContadorLikes]=useState(likes);
    const [ContadorDisLikes,setContadorDisLikes]=useState(dislikes);

    const sumarLikes=()=>{
         setContadorLikes(ContadorLikes +1);
    }
    const sumarDisLikes=()=>{
         setContadorDisLikes(ContadorDisLikes +1);
    }
    const restarLikes=()=>{
          setContadorLikes(ContadorLikes -1);
    }
    const restarDisLikes=()=>{
          setContadorDisLikes(ContadorDisLikes -1);
    }


    return(
        <>
            <div className="center">
                <h1>CONTADOR LIKES Y DISLIKES</h1>
                <br />
                <button onClick={sumarLikes} >Sumar likes</button>
                <button onClick={restarLikes}disabled={ContadorLikes === 0}>Restar likes</button>
                <br />
                
                <button onClick={sumarDisLikes}>Sumar dislikes</button>
                <button onClick={restarDisLikes}disabled={ContadorDisLikes === 0}>Restar dislikes</button>

            
                <h3>Contador Like: {ContadorLikes}</h3>
                <h3>Contador Dislike: {ContadorDisLikes}</h3>

                

            </div>


        </>
     
     )



}
export default ContadorLikes;