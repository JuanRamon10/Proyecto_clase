import React from "react";
import { useState } from "react";
import Aficiones from "./Aficiones";




const Matricula = ( {valor ,desmatricularFuncion})=>{
   



return(
    <>
    <div>
        <p>Id:{valor.id}</p>
        <p>Nombre:{valor.nombre}</p>
        <p>Apellidos:{valor.apellidos}</p>
        <p>Curso:{valor.curso}</p> 
        <Aficiones valorAficiones={valor.aficiones}/>
        <p>Comida:{valor.comida}</p>
        <br />
        <button onClick={(()=>{
           return desmatricularFuncion(valor.id);
        })}>desmatricular</button>
        <br />
    </div>
    </>
)

}
export default Matricula;