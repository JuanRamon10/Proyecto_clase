import './Contenedor1.css';

function Contenedor1(props){
    return (
        <div className= "contenedor">
            
            <p>{props.descripcion}</p>
            <h2>{props.children}</h2>
        </div>
    );
}
export default Contenedor1;