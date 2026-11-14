import React from "react";
import {useNavigate} from "react-router-dom"
import './Productos.css';
const Productos = ()=>{
   const navegar = useNavigate()
    return (
        <>
            <div>
                <p>Productos</p>
                <button onClick={()=>{
                    navegar('/')
                }}>Volver al Inicio</button>
            </div>
        </>
    )
}
export default Productos;