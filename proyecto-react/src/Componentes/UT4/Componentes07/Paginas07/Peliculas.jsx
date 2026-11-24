
import PeliculaDetalle from "./PeliculaDetalle.jsx";
import PeliculaSimple from "./PeliculaSimple.jsx";
import {Outlet, useParams} from "react-router-dom"
const Peliculas= ({valor})=>{
   
   


    const mostrarListaSimplePelicula = ()=>{

           return ( valor.map((v,i,array)=>{
                    return (
                        <>
                            <div>
                                <PeliculaSimple key ={i} valor={v}>
                                 
                                 </PeliculaSimple>
                                
                            </div>
                        </>
                    )
                }))

    }
 
//Error mio metert el outlet en el map
    return(
    <>
        <div>
            <h2>Peliculas</h2>
            {mostrarListaSimplePelicula()}
            <Outlet/>
            
        </div>
    </>
)

}
export default Peliculas;