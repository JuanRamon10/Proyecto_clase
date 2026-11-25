"use strict"

window.onload=()=>{
const div =document.getElementsByTagName("div")[0]

    div.addEventListener("click",(e)=>{
        if(e.target.nextElementSibling.classList.contains("oculto")){
              e.target.nextElementSibling.classList.toggle("oculto") 
        }
     
  
    },false)
};

