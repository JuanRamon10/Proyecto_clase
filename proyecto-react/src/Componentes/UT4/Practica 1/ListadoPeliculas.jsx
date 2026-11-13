import React from "react";
import Pelicula from "./Pelicula";


const ListadoPelicula=({valor})=>{
    
    return valor.map((v,i,array)=>{
        return <Pelicula key={i} valor={v} posicion={i} />
    })


}
export default ListadoPelicula;