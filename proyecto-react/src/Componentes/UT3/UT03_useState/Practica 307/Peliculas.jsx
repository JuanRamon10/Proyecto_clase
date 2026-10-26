import { useState } from "react";
import {datos} from "./peliculas.json"

/*
const Peliculas = ({datos}) =>{

    return(
        <>
           <div>
             <p>{datos.Peliculas.map((v,i,array)=>{
                  return {<p>{datos.id} - {v} </p>
                     <p>{datos.Peliculas.nombre} - {v} </p>
                     <p>{datos.director} - {v} </p>
                     <p>{datos.clasificacion} - {v} </p>
                     <p>{datos.recaudacion} - {v} </p>
                     <p>{datos.cartelera} - {v} </p>
                     <p>{datos.nota} - {v} </p>
                     <p>{datos.actores} - {v} </p>

             }
             })}</p>


           </div>




        </>
    );


}
    /**/
export default Peliculas;