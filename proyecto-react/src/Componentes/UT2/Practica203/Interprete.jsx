import React from "react";
import "./Interprete.css";


const Interprete =(props)=>{
    //Javascript Vanilla

    return (
        //JSX.
        <>
            <div className="interprete-contenedor">
                <h2>{props.nombre}</h2>
                <h4>{props.descripcion}</h4>
                <img src={props.imagen}></img>
                <h4>{props.children}</h4>
            </div>
        </>
    );
};

export default Interprete;