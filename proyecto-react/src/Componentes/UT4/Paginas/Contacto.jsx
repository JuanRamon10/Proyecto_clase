import React from 'react';
import { useNavigate } from 'react-router-dom';


const Contacto=()=>{
    const navegar = useNavigate()
    return(
        <>
        <div>

       
       <h2> Esto es el Contenido de Contactos</h2>
       <br />
                <button onClick={()=>{
                    navegar('/')
                }}>Volver al Inicio</button>
        </div>
        </>
    )
}
export default Contacto;