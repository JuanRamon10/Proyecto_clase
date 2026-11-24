import ListadoActores from "./ListadoActores.jsx"
import { useParams } from "react-router-dom";


const PeliculaDetalle = ({valor}) =>{
         
    // const id = useParams();// aqui los extrae un objeto
        const {id} = useParams();
       
         /* const pelicula=  peliculas.filter((v,i,array)=>{
                    return v.id == parseInt(id)
            }) Primer planteamiento errado me devuelve un array de todos los encontrados y no uno
                    */
          const pelicula=  valor.find((v)=>{
                return v.id == parseInt(id)
            })
         if (!pelicula) {
            return (
                <>
                <h2>Película no encontrada</h2>
                </>
            )
        }

        const {id:identificador, nombre: nombre ,director: director ,clasificacion: clasificacion,recaudacion: recaudacion ,cartelera: cartelera, nota:nota,actores:actores} = pelicula

    return(
        <>
        <div>
            <p>Indetificador:{identificador} </p>
            <p>Nombre:{nombre} </p>
            <p>Director:{director} </p>
            <p>Clasificacion:{clasificacion} </p>
            <p>Recaudacion:{recaudacion} </p>
            <p>Cartelera:</p>
            <img src={cartelera} alt="cartelera" />
            <p>Nota:{nota} </p>
            <ListadoActores datosArray={actores}></ListadoActores>



        </div>
        </>
    )


}
export default PeliculaDetalle;