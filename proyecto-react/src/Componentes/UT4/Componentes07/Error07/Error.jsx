import {Link} from "react-router-dom"


const Error =()=>{
    return(
        <>
            <div>
                <h2>Error 404 -Pagina no encontrada</h2>
                <p>La ruta que intentas acceder no existe</p>
                <Link to="/" >Volver al Inicio</Link>
            </div>
        
        </>
    )

}
export default Error