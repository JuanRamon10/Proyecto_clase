"use strict"
import{insertarTabla,colorPintar,borrarColores}from "../Biblioteca/biblioteca.js"
window.onload= ()=>{
insertarTabla()

 const div1 =document.getElementsByClassName("div1")[0]
 const div2 =document.getElementsByClassName("div2")[0]

 //Selecciono color
 // me a costado ver la variable yo estaba pensado cambiar el valor de lienzo
 let colorSelecionado="blanco";    
div1.insertAdjacentHTML("beforeend",`<p>Color seleccionado:<br>${colorSelecionado}</p>`)
const p=div1.getElementsByTagName("p")[0]
 div1.addEventListener("click",(e)=>{
        div1.querySelectorAll("div").forEach((v)=>{//con la validadcion evito tocar otra cosa que no sea colores
            if(e.target === v && !v.classList.contains("menu-color")&& !v.classList.contains("borrar")){
                colorSelecionado= v.className
                p.innerHTML=`<p>Color seleccionado:<br>${colorSelecionado}</p>`
            }
        })    

    },false)
    // creo variable raton para poder matenr pulsado haciendo el mousedown , mousemove y mouseover
    let raton= false // cuando clic mousedown y mantengo pulsado 
    div2.addEventListener("mousedown",(e)=>{
        if(e.target.tagName === "TD"){// antes validaba (e.target !== div2.getElementsByTagName("table")[0])
            // pero al caer que lo mejor es ser mas especifico porque si toco algo que no sea table sino otro elemento tambien lo coloreo
            //por eso valido directo al elemento a cambiar
                e.target.className= colorPintar(colorSelecionado); //asi me quito las clases anteriores a esta
                raton =true// al estar true me permite luego poder manterner el raton y pintar mientras lo mantego 
        }   

        console.log(e.target)
    },false)
    //si raton es true pinto 
    div2.addEventListener("mousemove",(e)=>{
        if(e.target.tagName === "TD" && raton){//valido que sea true si no no podre pintar mientras mantengo el clic
                e.target.className= colorPintar(colorSelecionado);//uso className para sobrescribir las clases anteriores
        }   

    },false)
    // suelto el raton mouseup
    div2.addEventListener("mouseup",(e)=>{
        console.log(e.target)
        if(e.target.tagName === "TD"){//He hecho el console log para encontrar el tagName por eso esta en mayusculas 
                e.target.className= colorPintar(colorSelecionado);
                raton=false // al ser false no se me queda pillado colorando sin mantener
        }


    },false)

 const botonBorrar = document.getElementsByClassName("borrar")[0]
    botonBorrar.addEventListener("click",borrarColores ,false)// lo hago de esta manera porque es ms corta 
    //pero busque boton en vez de borrar por eso no iba al clicar  e.target en el console.log y di con la solucion

};