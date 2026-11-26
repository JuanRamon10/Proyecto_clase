"use strict"

window.onload=()=>{
    //Ejercicio1 
const div =document.getElementsByTagName("div")[0]

    div.addEventListener("click",(e)=>{
        console.log(e.target)
        if(e.target.nextElementSibling.classList.contains("oculto") || e.target.classList.contains("cabecera")){
              e.target.nextElementSibling.classList.toggle("oculto") 
        }
  
    },false)


//Ejercicio 2

const pestaña1 = document.getElementsByClassName("pestanna1")[0]
pestaña1.addEventListener("click",(e)=>{
   /*Primera idea, si hago 6 elementos de el segundo div
    if(e.target.textContent === pestaña1.getElementsByTagName("p")[0].textContent){
        document.getElementsByClassName("pestanna2")[0].getElementsByTagName("p")[0].nextElementSibling.classList.toggle("oculto")
    }else if(e.target.textContent === pestaña1.getElementsByTagName("p")[1].textContent){
        document.getElementsByClassName("pestanna2")[0].getElementsByTagName("p")[2].nextElementSibling.classList.toggle("oculto")
    }else if(e.target.textContent === pestaña1.getElementsByTagName("p")[2].textContent){
        document.getElementsByClassName("pestanna2")[0].getElementsByTagName("p")[4].nextElementSibling.classList.toggle("oculto")

    }
   */
  /* Segunda idea si hago tres de tres
    for(let i = 0; i<pestaña1.getElementsByTagName("p").length; i++){
        if(e.target.textContent === pestaña1.getElementsByTagName("p")[i].textContent){
             document.getElementsByClassName("pestanna2")[0].getElementsByTagName("p")[i].classList.toggle("oculto")

        }
    }
    
*/
// acabo de descubrir el fuego si hago una comparativa e.target con la posicion si me detecta la posicion de este 
// y yo pensando que no por no estar indicado por un position
/*
for(let i = 0; i<pestaña1.getElementsByTagName("p").length; i++){
        if(e.target === pestaña1.getElementsByTagName("p")[i]){
             document.getElementsByClassName("pestanna2")[0].getElementsByTagName("p")[i].classList.toggle("oculto")

        }
    }
        */
    pestaña1.querySelectorAll("p").forEach((v,i)=>{
            if(e.target === v){
                document.getElementsByClassName("pestanna2")[0].getElementsByTagName("p")[i].classList.toggle("oculto")
            }
    })

},false)

};

