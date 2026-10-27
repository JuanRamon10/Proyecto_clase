import React from "react";
import { useState } from "react";

const ContadorLimite = ()=>{
   let numContador = 0
    const [contador,setContador]= useState(numContador);

    const incrementar = ()=>{

        setContador(contador + 1 );
    }

    const decrementar = ()=>{
        
        setContador(contador -1 );
    }

    return (
        <>
            <div>
                <button onClick={()=>{
                        incrementar();
          
                }} disabled={contador === 10 }>Incrementar</button>

                <button onClick={()=>{
                    if(contador< 11 && contador >-1){
                        decrementar();
                    }else{
                    }
                }} disabled={ contador === 0}>Decrementar</button>
                <br />
                <h4>Numeros:</h4>
                <p>{contador}</p>
            </div>
        
        </>

    )
}
export default ContadorLimite;