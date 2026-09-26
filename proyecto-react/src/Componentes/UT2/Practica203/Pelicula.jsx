import React from "react";
import "./Pelicula.css";

const Pelicula= (props) =>{

    return( 
        <div className="pelicula">
            <h2>{props.titulo}</h2>
            <p>{props.direccion}</p>
            <img src= {props.imagen}/>
            <p>{props.resumen}</p>
            <p>{props.elenco}</p>
        </div>
    );

};

export default Pelicula;