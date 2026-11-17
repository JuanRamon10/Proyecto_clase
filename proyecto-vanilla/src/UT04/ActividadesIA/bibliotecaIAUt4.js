

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
  
   const botones= document.createElement("p")
    botones.setAttribute("class","bottones")
  botones.appendChild(boton1)
  botones.appendChild(boton2)
   createDiv.appendChild(botones)

  const idPendientesDiv= document.querySelector("#pendientes")

  idPendientesDiv.appendChild(createDiv)
}    


export{annadir}