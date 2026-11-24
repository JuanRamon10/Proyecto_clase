
import {Link} from "react-router-dom"
import "./Menu.css"
const Menu = ()=>{
    return(
        <>
            <div>
                <nav>
                    <Link to='/' className="menu-elemento">Inicio</Link>
                    <Link to='/contacto' className="menu-elemento">Contacto</Link>
                    <Link to='/acercade' className="menu-elemento">Acerca de</Link>
                    <Link to='/productos' className="menu-elemento">Productos</Link>

                </nav>

            </div>
        </>
    )
}

export default Menu;