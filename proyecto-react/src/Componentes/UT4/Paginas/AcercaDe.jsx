import React from "react"
import {useNavigate} from "react-router-dom"
import "./AcercaDe.css"
const AcercaDe = ()=>{
   const navegar= useNavigate()
    return(
        <>
            <div className="acerca">
                <h3>Informacion sobre nosotros</h3>
                <button onClick={()=>{
                    navegar('/')
                }}>Volver al Inicio</button>

            </div>
        </>

    )

}
export default AcercaDe;