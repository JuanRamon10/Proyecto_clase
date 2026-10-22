import { useState } from "react";
import {datos} from "./peliculas.json"


const Peliculas = ({datos}) =>{

    return(
        <>
           <div>
             <p>{datos.Peliculas.map((v,i,array)=>{
                    return <p>{i} - {v} </p>
             })}</p>


           </div>




        </>
    );


}
export default Peliculas;