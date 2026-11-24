import React from "react";
import {Link, Outlet} from "react-router-dom"

const Galeria= ()=>{
return(
    <>
        <div>
            <h2>Esto es la Galeria</h2>
            
            <nav>
                <ul>
                    <li><Link to="titulo">Filtrar por titulo</Link></li>
                    <li><Link to="interprete">Filtrar por Interprete</Link></li>
                    <li><Link to="director">Filtrar por Director</Link></li>

                </ul>

            </nav>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    </>
)

}
export default Galeria;