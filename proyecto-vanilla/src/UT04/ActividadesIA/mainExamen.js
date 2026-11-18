import{mostrarAprobados}from "./BiliotecaExamen.js"
const boton = document.createElement("button")
boton.onclick=mostrarAprobados
boton.textContent="Mostrar"
document.body.innerHTML="<div></div>"
const divNuevo =document.getElementsByTagName("div")[0]
divNuevo.appendChild(boton)