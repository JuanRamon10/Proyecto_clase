import Actor from "./Actor";

const ListadoActores= ({datosArray})=>{

    return datosArray.map((v,i,array)=>{
        return <Actor key={i} datosActor={v} indice={i} />
    })



}
export default ListadoActores;

