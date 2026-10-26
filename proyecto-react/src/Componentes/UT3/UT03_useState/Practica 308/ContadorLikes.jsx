import React, { useState } from "react";

const ContadorLikes=()=>{
    const likes = 0;
    const dislikes = 0;

    const [ContadorLikes,setContadorLikes]=useState(likes);
    const [ContadorDisLikes,setContadorDisLikes]=useState(dislikes);

    const sumarLikes=()=>{
       return  setContadorLikes(ContadorLikes +1);
    }
        const sumarDisLikes=()=>{
       return  setContadorDisLikes(ContadorDisLikes +1);
    }

}