import{alumnos}from "./datos.js"


const mostrarAprobados=()=>{
    if(Array.isArray(alumnos)){
           const idLista= document.getElementById("lista-aprobados");
            idLista.innerHTML=""
            const filtrarAlumnos = alumnos.filter((v,i,array)=>{
                return  v.nota>=5
            })

            filtrarAlumnos.forEach((v)=>{
                idLista.insertAdjacentHTML("beforeend",
            `<div class="alumno">${v.id}:${v.nombre}: ${v.nota} </div>`)
            })
           /* const alumnosFiltrados = filtrarAlumnos.map((v,i,array)=>{
            idLista.insertAdjacentHTML("beforeend",
            `<div class="alumno">${v.id}:${v.nombre}: ${v.nota} </div>`
      
        }))OTRA FORMA DE HACERLO*/ 


  
      
    }

}
export{mostrarAprobados}