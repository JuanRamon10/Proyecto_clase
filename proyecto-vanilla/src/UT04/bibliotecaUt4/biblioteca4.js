import{esPrimo}from "../../UT03/bibilioteca/biblioteca03.js"
"use strict"
import {quijoteFrases} from "../Actividad 1/quijoteFrases.js"
import{toCani}from "../../UT03/bibilioteca/biblioteca03.js"

const ejercicio1 = ()=>{
    setTimeout(()=>{

   
    const situarFuncionesEnDom =document.getElementById("info");
    const crearDiv1 = document.createElement("div");
    const pasarTextoFuncion1 = document.createTextNode(`Funcion 1: ${contarParrafo()}`);
    const unirDivAFuncion1 = crearDiv1.appendChild(pasarTextoFuncion1);

    const crearDiv2 = document.createElement("div");
    const pasarTextoFuncion2 = document.createTextNode(`Funcion 2: ${segundoTextParrafo()}`);
    const unirDivAFuncion2 =crearDiv2.appendChild(pasarTextoFuncion2);

    const crearDiv3 = document.createElement("div");
    const pasarTextoFuncion3 = document.createTextNode(`Funcion 3: ${numEnlace()}`);
    const unirDivAFuncion3 =crearDiv3.appendChild(pasarTextoFuncion3);


    const crearDiv4 = document.createElement("div");
    const pasarTextoFuncion4 = document.createTextNode(`Funcion 4: ${primerEnlace()}`);
    const unirDivAFuncion4 =crearDiv4.appendChild(pasarTextoFuncion4);

    const crearDiv5 = document.createElement("div");
    const pasarTextoFuncion5 = document.createTextNode(`Funcion 5: ${penultimoEnlace()}`);
    const unirDivAFuncion5 =crearDiv5.appendChild(pasarTextoFuncion5);
    
    situarFuncionesEnDom.appendChild(crearDiv1);//El div esta modificado de la otra forma con el unirDiv estariamos sacan el texto y no el div que queremos añadir ya que este lo que hace es modificar el div
    situarFuncionesEnDom.appendChild(crearDiv2);
    situarFuncionesEnDom.appendChild(crearDiv3);
    situarFuncionesEnDom.appendChild(crearDiv4);
    situarFuncionesEnDom.appendChild(crearDiv5);

 },2000)

}

const contarParrafo = ()=>{

    const numeroParrafo = document.getElementsByTagName("p");
    console.log(`Parrafos selecionados: ${numeroParrafo.length}`);
    return numeroParrafo.length
}

const segundoTextParrafo = ()=>{
    const textoParrafo = document.getElementsByTagName("p");
    const textParrafoSegundo= textoParrafo[1];
    return textParrafoSegundo.innerText;

}

const numEnlace = ()=>{
    const buscarEnlaces = document.getElementsByTagName("a");
    const numeroEnlaces= buscarEnlaces.length;
    return numeroEnlaces;


}

const primerEnlace = ()=>{
    const buscamosEnlaces = document.getElementsByTagName("a");
    const primerEnlace= buscamosEnlaces[0].getAttribute("href");
    return primerEnlace

}


const penultimoEnlace = ()=>{
    const buscamosEnlacesUltimo = document.getElementsByTagName("a");
    const ultimoEnlace= buscamosEnlacesUltimo[buscamosEnlacesUltimo.length -2].getAttribute("href");
    return ultimoEnlace

}
const ejercicio2 = ()=>{
    setInterval(()=>{
       const guardarContenidoId =document.getElementById("lista");
        const liCreado=  document.createElement("li");
        const textoGenerado= document.createTextNode(`Numero Aleatorio:${numeroAleatorio()}`)
        liCreado.appendChild(textoGenerado)
        guardarContenidoId.appendChild(liCreado);

    },2000)

}

const numeroAleatorio = ()=>{
    return Math.floor(Math.random()*1000)+1
}

const fraseContinuaQujote = ()=>{
    if(Array.isArray(quijoteFrases)){
      const  elementoId = document.getElementById("bodyTabla");

      let textNormal=" ";
      let textCani= " ";
      let i = 0; 
        setInterval(()=>{
            const crearTr = document.createElement("tr");
            const crearTd = document.createElement("td");
            const crearTdCani = document.createElement("td");

            textNormal =  document.createTextNode(`Frase ${i}: ${quijoteFrases[i]}`,)
            textCani =  document.createTextNode(`Frase ${i}: ${toCani(quijoteFrases[i])} `)
            console.log(quijoteFrases[i]);
            crearTd.appendChild(textNormal);
            crearTdCani.appendChild(textCani);
            crearTr.appendChild(crearTd);
            crearTr.appendChild(crearTdCani);
            elementoId.appendChild(crearTr);
            i++;
            
        },1000)

        
        

    }

}
//ENTENDER BIEN SI O SI 

function insertAfter(nuevoElemento, existenteElemento){

    const padreElemento = existenteElemento.parentNode
    const hermanoElementoExistente = existenteElemento.nextSibling
    if ( hermanoElementoExistente !== null){
        padreElemento.insertBefore(nuevoElemento,hermanoElementoExistente)
    }else{
        padreElemento.appendChild(nuevoElemento)
    }
    
}


//Actividad 2 


//Ejercicio 1-2-3-4
function cesurarTexto(){
   const hijosDeBody =document.body.children
   for(let i = 0; i< hijosDeBody.length;i++){
       hijosDeBody[i].innerHTML= hijosDeBody[i].textContent.replace("sexo",`<span class="LetraRoja">Contenido Bloqueado</span>`)
   }


}


const tablaPrimo = ()=>{
   const elementoBody = document.getElementsByTagName("body")
    console.log(elementoBody[0])
    elementoBody[0].insertAdjacentHTML("beforeend",`<table id="tabla"border="1"></table>`)
  const tablaSeleccionada = document.getElementById("tabla");  
  let contador=1
    for(let i = 1; i< 11; i++ ){
       const trInsert= tablaSeleccionada.insertAdjacentHTML("beforeend",`<tr id=${i}></tr>`)
        for(let j= 1; j<11 ; j++){
           const elementoId= document.getElementById(i)
            elementoId.insertAdjacentHTML("beforeend",` <span>${contador}<span> `)

            contador++;
            console.log(contador)
        }
    }
    
    tablaPrima()

}


const tablaPrima =()=>{
   const idSet = setTimeout(()=>{
    const span = document.getElementsByTagName("span")
    for(let i = 0; i<span.length;i++){
        if(esPrimo(span[i].textContent)){
            span[i].setAttribute("class","colorAzul")
        }else{
            span[i].setAttribute("class","colorRojo")    
        }
    } 
    

   },2000)


}
const estiloAletaroio =()=>{
   setInterval(()=>{
        const arrayLista = ["rojo","azul","verde","amarillo","negro"]
        let todosP =document.getElementsByTagName("p")
        const parrafoAleatorio = Math.floor(Math.random()*5)
        const numAleatorio= Math.floor(Math.random()*5)
        todosP[parrafoAleatorio].setAttribute("class",arrayLista[numAleatorio])
    
   },1000)

}

const imagenesAleatorias = () =>{
    const  arrayImagenes =["img/TrumpMeme.jpg","img/MemeJr.jpeg", "img/meme1.jpeg","img/Maduro.jpeg"]
   const divCreado= document.createElement("div")
   const imgCreado= document.createElement("img")
    imgCreado.style.opacity=`0`
   imgCreado.setAttribute("src",arrayImagenes[0])
    divCreado.appendChild(imgCreado)
    document.body.appendChild(divCreado)
    divCreado.style.position="relative"
    let contador= 0
    let opacidad =0.0
    let movimiento=2
    setInterval(()=>{
        if(contador > arrayImagenes.length-1){
            contador=0
        }
  
        imgCreado.style.opacity=`0`
        imgCreado.src= arrayImagenes[contador]
 
        

   
 
        let opacidadProgresiva=setInterval(()=>{
            
      
            if(opacidad<1.1){
                imgCreado.style.opacity=`${opacidad}`
                opacidad=opacidad+ 0.1
            }else{
                opacidad =0.0
                clearInterval(opacidadProgresiva)
            }
        },50)

        divCreado.style.left=`${movimiento}px`
       
        movimiento++
        contador++
    },2000)
}
///Actividad 3 
document.querySelectorAll(".tarea").forEach(v=>v.remove())
document.querySelectorAll(".acabada").forEach(v=>v.remove())

const anadirTextoPendiente=()=>{

    const texto = document.getElementsByTagName("textarea")[0].value
        if(texto===""){
            alert("Eres tonto,pon algo")
            return
        }
      const sacoPadre =document.getElementById("pendientes").getElementsByTagName("h1")[0]

     let divCreado= document.createElement("div")
        divCreado.setAttribute("class","tarea")

       const primerParr= document.createElement("p")
       const segundoParr= document.createElement("p")
 
       primerParr.textContent = texto
 
       const input1=  document.createElement("input")
        const input2=  document.createElement("input")
 
        input1.type="button"
        input1.value ="Borrar"
        input1.setAttribute("class","del")
             
        input2.type="button"
        input2.value ="Acabar"
        input2.setAttribute("class","end")
        segundoParr.className="botones"
        segundoParr.appendChild(input1)
        segundoParr.appendChild(input2)

        divCreado.appendChild(primerParr)
        divCreado.appendChild(segundoParr)

      sacoPadre.insertAdjacentElement("afterend",divCreado)

      input1.onclick= ()=>divCreado.remove()
      input2.onclick= ()=> acabarTarea(divCreado)
      document.getElementsByTagName("textarea")[0].value = "";

}
const botonAnnadir = document.querySelector(".add")//aqui el punto para especificar que es una clase
botonAnnadir.onclick = anadirTextoPendiente 


    
const revertir= (TareaAcabada)=>{
 //Extraer texto 

 const texto = TareaAcabada.getElementsByTagName("p")[0].textContent


 const sacoPadre =document.getElementById("pendientes").getElementsByTagName("h1")[0]

     let divCreado= document.createElement("div")
        divCreado.setAttribute("class","tarea")
    
       const primerParr= document.createElement("p")
       const segundoParr= document.createElement("p")
 
       primerParr.textContent = texto
        segundoParr.className="botones"

       const input1=  document.createElement("input")
        const input2=  document.createElement("input")
 
        input1.type="button"
        input1.value ="Borrar"
        input1.setAttribute("class","del")
             
        input2.type="button"
        input2.value ="Acabar"
        input2.setAttribute("class","end")

        segundoParr.appendChild(input1)
        segundoParr.appendChild(input2)

        divCreado.appendChild(primerParr)
        divCreado.appendChild(segundoParr)

      sacoPadre.insertAdjacentElement("afterend",divCreado)

      input1.onclick= ()=>divCreado.remove()
      input2.onclick= ()=> acabarTarea(divCreado)





 TareaAcabada.remove()


}



const acabarTarea= (divTarea)=>{
 //Extraer texto 
 const divAcabadas = document.getElementById("acabadas")
 
    const creoDiv = document.createElement("div") 
    creoDiv.setAttribute("class", "acabada")
    const primerParrA = document.createElement("p")
    primerParrA.textContent = divTarea.getElementsByTagName("p")[0].textContent

    const segunParrA = document.createElement("p")
    segunParrA.className="botones"

   const input1Act= document.createElement("input")
   const input2Act= document.createElement("input")

   input1Act.type= "button"
   input1Act.value= "Archivar"
   input1Act.className = "del" // estoy añadiendo una clase 

   input2Act.type= "button"
   input2Act.value= "Volver"
   input2Act.className = "end"

segunParrA.appendChild(input1Act)
segunParrA.appendChild(input2Act)

creoDiv.appendChild(primerParrA)
creoDiv.appendChild(segunParrA)

divAcabadas.appendChild(creoDiv)

input1Act.onclick=()=>creoDiv.style.display = "none";
input2Act.onclick= ()=> revertir(creoDiv);
divTarea.remove();
}

const mostrarDatos =()=>{
   const acabadas = document.getElementsByClassName("acabada")
    for(let i=0; i<acabadas.length;i++){
        acabadas[i].style.display= "block"
    }
}
const botonMostrar=document.getElementsByClassName("sho")[0]
    botonMostrar.onclick=mostrarDatos
export{ejercicio1,ejercicio2,fraseContinuaQujote,insertAfter,cesurarTexto,tablaPrimo,estiloAletaroio,imagenesAleatorias,anadirTextoPendiente,acabarTarea};