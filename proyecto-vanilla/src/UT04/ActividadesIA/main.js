"use strict"
import{annadir,mostrar}from "./bibliotecaIAUt4.js"

document.querySelectorAll(".tarea").forEach((tarea)=>{
    tarea.remove()
})
document.querySelectorAll(".acabada").forEach((acabada)=>{
    acabada.remove()
})

const botonAnnadir =document.querySelector(".add");
console.log(botonAnnadir)
botonAnnadir.onclick=annadir

const botonMostrar = document.querySelector(".sho");
botonMostrar.onclick=mostrar