import React from "react";
import { useState } from "react";
import {discentes} from "./matriculados.json"
import Matricula from "./Matricula";

const ListaMatriculas = () =>{
    
    const [matricula,setMatricula]= useState(discentes);

    const mostrar2Daw = ()=>{
            
       const matriculaFiltrada = matricula.filter((v,i,array)=>{
            return v.curso.includes("2DAW")
        })
        setMatricula(matriculaFiltrada);
       
    }
    const mostrar1 = ()=>{
       const matriculaFiltrada = matricula.filter((v,i,array)=>{
            return v.curso.includes("1")
        })
        setMatricula(matriculaFiltrada);
    }

    const mostrarDaw = ()=>{
       const matriculaFiltrada = matricula.filter((v,i,array)=>{
            return v.curso.includes("DAW")
        })
        setMatricula(matriculaFiltrada);
    }
    const aficionLectura = ()=>{
        const matriculaFiltrada = matricula.filter((v,i,array)=>{
            return v.aficiones.includes("lectura")
        })
        setMatricula(matriculaFiltrada);
          
    }
    const reiniciarValores = ()=>{
        setMatricula(discentes);
    }
    
    const ordenarAscendenteApellidos =()=>{

       const matriculaOrdenadaAsc= [...matricula].sort((a,b)=>{
            return a.apellidos.localeCompare(b.apellidos)
        })
        setMatricula(matriculaOrdenadaAsc);


    }
       const ordenarDescendenteApellidos =()=>{

       const matriculaOrdenadaDes=  [...matricula].sort((a,b)=>{
            return b.apellidos.localeCompare(a.apellidos)
        })
        setMatricula(matriculaOrdenadaDes);

    }
    const desmatricular = (desmatricularId)=>{
     const nuevaMatriculas=  matricula.filter((v,i,array)=>{
            return v.id !== desmatricularId;
        })
        setMatricula(nuevaMatriculas);
    }
   
   
    return (
        <> <div>
            <button onClick={(()=>{
           return mostrar2Daw()
        })}>mostrar2Daw</button>
        <br />
        <button onClick={(()=>{
           return mostrar1()
        })}>mostrar1</button>

        <button onClick={(()=>{
           return mostrarDaw()
        })}>mostrarDaw</button>


        <button onClick={(()=>{
           return aficionLectura()
        })}>aficionLectura</button>


        <button onClick={(()=>{
           return reiniciarValores()
        })}>reiniciarValores</button>

       <button onClick={(()=>{
           return ordenarAscendenteApellidos()
        })}>ordenarAscendenteApellidos</button>

               <button onClick={(()=>{
           return ordenarDescendenteApellidos()
        })}>ordenarDescendenteApellidos</button>




        {
    matricula.map((v,i,array)=>{
        return <Matricula key={i} valor={v} desmatricularFuncion={desmatricular}/>

    })
    }

    </div>
    </>
    )
}

export default ListaMatriculas;