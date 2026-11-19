
import PeliculaDetalle from "./PeliculaDetalle.jsx";

const Peliculas= ({valor})=>{
    let {nombre: titulo, cartelera: imagen } = valor

   valor.map((v,i,array)=>{
        return (
            <>
                <div>
                    
                    <PeliculaDetalle id={i} valor={} />
                </div>
            </>
        )
    })

    return(
    <>
        <div>
            <h2>Peliculas</h2>
            <h3>{titulo}</h3>
            <img src={imagen} alt="" />
            
            
        </div>
    </>
)

}
export default Peliculas;