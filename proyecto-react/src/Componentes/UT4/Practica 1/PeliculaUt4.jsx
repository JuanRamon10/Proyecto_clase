
import Actor from "./Actor.jsx";
import {peliculas} from "./peliculas.json"
import ListadoActores from "./ListadoActores.jsx";
import "./Pelicula.css";
import { useRef } from "react";
import Taquilla  from "./Taquilla.jsx";

const PeliculaUt4 = ({valor}) =>{
    const refTaquilla = useRef(null);
    
        
    const refElenco = useRef(null);
      
    const mostrarTaquilla =()=>{
        const elementoTaquilla =refTaquilla.current
          console.log(elementoTaquilla)

        if(elementoTaquilla.classList.contains("oculto")){
            elementoTaquilla.classList.replace("oculto","visible")

        }else{
            elementoTaquilla.classList.replace("visible","oculto")
        }
    }
const mostrarElenco =()=>{
        const elementoElenco =refElenco.current
          console.log(elementoElenco)

        if(elementoElenco.classList.contains("oculto")){
            elementoElenco.classList.replace("oculto","visible")

        }else{
            elementoElenco.classList.replace("visible","oculto")
        }
    }


    return(
        <>
           <div className="tablas">                
                     <p>Id: {valor.id} </p>
                     <p>Nombre: {valor.nombre} </p>
                     <p>Director: {valor.director}</p>
                     <p>Clasificacción: {valor.clasificacion} </p>
                     <p>Cartelera: <img src={valor.cartelera} alt={valor.nombre}></img></p>
                     <p>Nota: {valor.nota}</p>
                     <p>Resumen: {valor.resumen}</p>
                     <button onClick={mostrarElenco}>Elenco</button>
                     <button onClick={mostrarTaquilla}>Taquilla</button>
                     <div ref={refTaquilla} className={"oculto"}>
                        <Taquilla parametro={valor.recaudacion} />
                     </div>
                     <div ref={refElenco} className={"oculto"}>
                     <ListadoActores datosArray={valor.actores} />
                    </div>
           </div>




        </>
    );


}
export default PeliculaUt4;