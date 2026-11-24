
import {Link}from "react-router-dom"
import {Outlet}from "react-router-dom"


const PeliculaSimple = ({valor})=>{
    let {id : id, nombre: titulo, cartelera: imagen } = valor

    return (
        <>
            <div>
                <Link to={`/peliculas/${id}`}> <h3>{titulo}</h3>  </Link>
                <img src={imagen} alt={titulo} width="100" />
                
            </div>
        </>

    )

}

export default PeliculaSimple