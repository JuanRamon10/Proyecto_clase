

const annadir = () =>{

    const textArea= document.querySelector("textarea");
    const texto = textArea.value
    if(texto === ""){
        alert("Error, pon algo")
        return
    }
   const createDiv = document.createElement("div")
    createDiv.setAttribute("class", "tarea")
    const id = crypto.randomUUID();//Mirar parentesis es funcion
    createDiv.setAttribute("id", id)

    const createP = document.createElement("p")
   const textoNodo= document.createTextNode(texto)

    createP.appendChild(textoNodo)
    createDiv.appendChild(createP)
  const boton1= document.createElement("button")
  const borrar = document.createTextNode("Borrar")
  boton1.appendChild(borrar)

  boton1.setAttribute("class","del")
  boton1.onclick=()=>createDiv.remove()

  const boton2 = document.createElement("button")
  boton2.value="Acabar"
   boton2.setAttribute("class","end")
const acabar = document.createTextNode("Acabar")
  boton2.appendChild(acabar)
  boton2.onclick=()=>acabarTarea(id)
   const botones= document.createElement("p")
    botones.setAttribute("class","botones")
  botones.appendChild(boton1)
  botones.appendChild(boton2)
   createDiv.appendChild(botones)

  const idPendientesDiv= document.querySelector("#pendientes")

  idPendientesDiv.appendChild(createDiv)
  textArea.value=""
}    


const acabarTarea = (id) =>{
   const prueba =document.getElementById(id)
   //prueba.classList.replace("tarea","acabada")
   prueba.classList.remove("tarea")
   prueba.classList.add("acabada")
   const boton1 = prueba.querySelector(".del")
   const boton2= prueba.querySelector(".end")
    boton1.textContent="Archivar"
    boton2.textContent="Volver"
   const divPendiente = document.querySelector("#acabadas")
    divPendiente.insertAdjacentElement("beforeend",prueba)

      boton1.onclick=()=>archivar(id)
      boton2.onclick=()=>volverTarea(id)
  


    }

    const archivar = (id)=>{
       const tarea= document.getElementById(id)
        tarea.classList.add("oculto")
    }

    const mostrar = ()=>{
      const ocultos= document.querySelectorAll(".oculto")
        ocultos.forEach((oculto)=>{
            oculto.classList.replace("oculto","mostrar")
            //oculto.classList.remove("oculto")
            //oculto.classList.add("mostrar")
            // oculto.classList.toggle("oculto")
        })

    }

 const volverTarea=(id)=>{
    const tareaAcabada = document.getElementById(id);
    const textoTareaAcabada = tareaAcabada.getElementsByTagName("p")[0].textContent
   
    const idAntigua = tareaAcabada.id
    tareaAcabada.remove()
   const divPendientes = document.getElementById("pendientes")
    divPendientes.insertAdjacentHTML("beforeend",
          `<div class="tarea" id="${idAntigua}">
            <p>${textoTareaAcabada}</p>
            <p class="botones">
              <button class="del">Borrar</button>
              <button class="end">Acabar</button>
            </p>
          </div>`
    )
   const divCreado= document.getElementById(idAntigua)
    const boton1 =document.getElementById(idAntigua).getElementsByClassName("del")[0]
    boton1.onclick=()=> divCreado.remove()
    const boton2 =document.getElementById(idAntigua).getElementsByClassName("end")[0]
    boton2.onclick=()=> acabarTarea(idAntigua)

   
 }
/*EJEMPLOS De remplazo
 const  spanId = document.getElementById("etiqueta-estado")
 const boton =document.createElement("button")
 boton.id="boton-activar"
boton.textContent="Activar cuenta"
 spanId.parentNode.replaceChild(boton,spanId)

spanId.outerHTML='<button id="boton-activar">Activar cuenta</button>';
*/
export{annadir,acabarTarea,mostrar}