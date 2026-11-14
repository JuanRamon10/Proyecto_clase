import React from "react";
import PeliculaUt4 from "./PeliculaUt4";


const ListadoPelicula=({valor})=>{
    
    return valor.map((v,i,array)=>{
        return <PeliculaUt4 key={i} valor={v} posicion={i} />
    })


}
export default ListadoPelicula;