"use strict"
import{intervaloHola,pararSaludo,hexadecimalAleatorio,crearP} from "../Biblioteca/biblioteca.js"
window.onload= ()=>{


const boton1 =document.createElement("button")
boton1.textContent="Comenzar Saludos"
boton1.addEventListener("click",intervaloHola,false) //Al hacerse el evento click sobre el boton hara la funcion intervaloHola
document.body.appendChild(boton1)

const boton2 =document.createElement("button")
boton2.textContent="Parar saludos"
boton2.addEventListener("click",pararSaludo,false) // NO remove hace que se quite esa funcion de forma dinamica al hacer clic en el boton 2
document.body.appendChild(boton2)
console.log(boton2)

//Error mio en este ejercicio usa el window.dbclick() pero al no saber usarlo lo he hecho con el addListener 
window.addEventListener("dblclick",()=>{ //dbclick es doble click
    document.body.style.backgroundColor=hexadecimalAleatorio()
},false)

//mal porque tiene px 0 hasta que no se le creen elementos o se le de una anchura y altura por css ademas solo aplica si el raton esta encima del body es mejor el window que abarca todo
window.addEventListener("mousemove",(evento)=>{
    crearP(evento.clientX,evento.clientY)

},false)





};
