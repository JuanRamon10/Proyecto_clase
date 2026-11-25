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










export{intervaloHola,pararSaludo,hexadecimalAleatorio,crearP}