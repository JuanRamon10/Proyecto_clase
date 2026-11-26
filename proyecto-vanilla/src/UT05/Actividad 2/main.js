"use strict"

window.onload=()=>{
    //Ejercicio1 
const div =document.getElementsByTagName("div")[0]

    div.addEventListener("click",(e)=>{
        if(e.target.nextElementSibling.classList.contains("oculto") || e.target.classList.contains("cabecera")){
              e.target.nextElementSibling.classList.toggle("oculto") 
        }
        console.log(e.target)
  
    },false)


//Ejercicio 2

const pestaña1 = document.getElementsByClassName("pestanna1")[0]
pestaña1.addEventListener("click",(e)=>{
    console.log(e.target)
  
    

},false)

};

