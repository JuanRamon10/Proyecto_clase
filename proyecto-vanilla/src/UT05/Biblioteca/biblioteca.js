"use strict"
//tengo que crear una variable que conecte el intervaloHola y parar saludo;
let ipIntervalo;
function intervaloHola(){ //antes funcion anonima pero el fallo persiste
  ipIntervalo = setInterval(()=>{
        document.body.insertAdjacentHTML("afterbegin","<h1>¡Hola Feo!</h1>")

    },2000)
}

function pararSaludo(){
    clearInterval(ipIntervalo)
}

const hexadecimalAleatorio = ()=>{
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]; 
        let hexadecimal =`#`    
    for(let i= 0; i<6; i++){
           let numRandom= Math.floor(Math.random()*16)
            hexadecimal= `${hexadecimal}${letras[numRandom]}`
        }
    
        return hexadecimal;
}

const crearP= (string1, string2)=>{
    
    document.body.insertAdjacentHTML("afterbegin",`<p>La posicion x:${string1}, la posicion y:${string2}</p>`)
}


//Actividad 2




//Actividad 3


const insertarTabla =()=>{

    const tabla =document.getElementsByClassName("tabla")[0]
    for( let i = 0; i<60; i++){
        tabla.insertAdjacentHTML("beforeend","<tr></tr>");
        for( let j = 0; j<60; j++){
            const tr =tabla.getElementsByTagName("tr")[i]
            tr.insertAdjacentHTML("beforeend","<td></td>");
    }
    }
}

const colorPintar=(colorSeleccionado)=>{
    if(colorSeleccionado === "blanco"){
                return "td_blanco"

            }else if(colorSeleccionado === "negro"){
                return "td_negro"

            }else if(colorSeleccionado === "amarillo"){
                return "td_amarillo"

            }else if(colorSeleccionado === "rojo"){
                return "td_rojo"

            }else if(colorSeleccionado === "azul"){
                return "td_azul"

            }else if(colorSeleccionado === "verde"){
               return "td_verde"

            } 
}

function borrarColores(){
    document.querySelectorAll("td").forEach((v)=>{
        v.className="td_blanco"
    })
}


export{intervaloHola,pararSaludo,hexadecimalAleatorio,crearP,insertarTabla,colorPintar,borrarColores}