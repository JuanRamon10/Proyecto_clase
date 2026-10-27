
import Actor from "./Actor";
import {peliculas} from "./peliculas.json"
import ListadoActores from "./ListadoActores";
import "./Pelicula.css";


const Pelicula = ({valor}) =>{

    return(
        <>
           <div className="tablas">                
                     <p>Id: {valor.id} </p>
                     <p>Nombre: {valor.nombre} </p>
                     <p>Director: {valor.director}</p>
                     <p>Clasificacción: {valor.clasificacion} </p>
                     <p>Recaudación: {valor.recaudacion}</p>
                     <p>Cartelera: <img src={valor.cartelera}></img></p>
                     <p>Nota: {valor.nota}</p>
                     <p>Resumen: {valor.resumen}</p>
                     <div>
                     <ListadoActores key={valor.id} datosArray={valor.actores}/>
                    </div>
           </div>




        </>
    );


}
export default Pelicula;