import "./Menu.css"
import {Link} from "react-router-dom"


const Menu = ()=>{
    return (
        <>
        <div>
            <nav>
                <Link to={"/"} className="menu-elemento">Inicio</Link>
                <Link to={"/peliculas"}className="menu-elemento">Películas</Link>
                <Link to={"/interpretes"}className="menu-elemento">Intérpretes</Link>
                <Link to={"/galeria"}className="menu-elemento">Galería</Link>
                <Link to={"/acercade"}className="menu-elemento">Acerca de</Link>
            </nav>
        </div>
        
        </>

    );

}
export default Menu;