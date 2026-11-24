import React from "react";
const Actor = ({datosActor})=>{

    return(

        <>
        <div className="center">
            <p>Nombre:{datosActor.nombre}</p>    
            <p>Fecha de nacimiento:{datosActor.fechaNacimiento}</p>    
            <p>Bibliografia:{datosActor.biografia}</p>    
            <p>Imagen:<img src={datosActor.imagen}></img></p>    
            
        </div>        
        </>
    
    
    );


}
export default Actor;