import React from "react";
import { useState } from "react";



const Listado = ()=>{
    let listadoNumeros = [];
    const [listado,setListado] = useState(listadoNumeros)
    const generarAleatorio = ()=>{
       let numAletorio= Math.floor(Math.random()*100)+1
       if(!listado.includes(numAletorio)){
          let  arrayNuevo=  [...listado,numAletorio]
          setListado(arrayNuevo);
       } 
  
      
       
    }
    const eliminarNumero = (num)=>{
      const nuevaLista= listado.filter((v,i,array)=>{
            return v !== num
        })
        setListado(nuevaLista);
    }
    const borrarTodo =()=>{
        setListado(listadoNumeros);
    }


    return (
        <>
        <div>
            <button onClick={()=>{
                return generarAleatorio();
            }}>Generar</button>

            <button onClick={()=>{
                return borrarTodo()
            }}>Borrar todo</button>
            <br /> 
            <ul>
                {listado.map((v,i,array)=>{
                        return (
                        <>
                        <li key={i}>{v}</li>
                        
                        </>
                        )
                })}
            </ul>
        </div>
        
        </>
    )

}
export default Listado;