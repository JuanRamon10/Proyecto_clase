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
    const  arrayImagenes =["img/Evo.jpg"]


}

export{ejercicio1,ejercicio2,fraseContinuaQujote,insertAfter,cesurarTexto,tablaPrimo,estiloAletaroio};